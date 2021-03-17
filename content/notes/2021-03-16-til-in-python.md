---
title: TIL in Python
description: Using NumPy for RNG Selection
date: 2020-03-16
tags:
 - python
 - numpy
 - gamedev
---

In roguelike games, it is usually the case that we want to use randomization to scatter assets around a level or area during generation. This can be items, monsters, or even the distribution of the tiles themselves. For my own projects, I like to generate levels by first laying down a base tile, either the most general "floor" or "wall" type depending on if it's an open area or an indoor space. Once the base tile is down, I will often have several steps of walking through the tilemap and randomly placing some other asset. For instance, if my area is an open field, I might randomly place one or two variants of grass tiles to give the map some texture.

My usual method for this is to simply "flip a coin" or do a "dice roll". Say I have a map that is 64x64 tiles, then:

```python
for x in range(64):
	for y in range(64):
		if tilemap[x, y] == Tiles.unformed():
			roll = random.randrange(0, 100)
			if roll <= 10:
				tilemap[x, y] = Tiles.tree_1()
			if 10 < roll <= 20:
				tilemap[x, y] = Tiles.grass()
			if 20 < roll <= 40:
				tilemap[x, y] = Tiles.tall_grass()
```

For each tile in the tilemap, I check if the tile is unformed - that is, it has no style applied to it yet and must be given a concrete tile type. If it is unformed, I do a roll for some value between 0 and 100. Then, I assign ranges of that roll as thresholds for different tile types. If the roll fell between 10 and 20 for position (23, 41), for example, the unformed tile at that position would be replaced with a grass type tile.

This works alright, but it's a bit hamfisted. It's not the fastest and, if we're being honest, it's just not very sexy.

In discussing procgen methods with some folks over at the RoguelikeDev Discord, it was brought to my attention that NumPy has some slick ways of doing this. With the initial help of some other devs and a bit of tinkering, I settled on this implementation:

```python
def rng_selection(
		tile_space: TileSpace, 
		mask_type: TileType, 
		fill_type: TileType, 
		asset_list: List[Tuple[int, TileType]]
	) -> TileSpace:
	selection_set = np.full(100, fill_value=fill_type)
	
	low = 0
	for threshold, tile_type in asset_list:
		selection_set[low:threshold] = tile_type
		low = threshold
		
	mask = (tile_space == mask_type)
	rng_samples = np.random.randint(low=0, high=100, size=(64, 64))

	np.putmask(tile_space, mask, selection_set[rng_samples])
	return tile_space
```

When I initialize my tilemap (the `TileSpace`), I'll do something like the following:

```python
tile_space = np.zeros((64, 64), dtype=object, order="F")
tile_space[:] = Tiles.unformed()

rng_selection(
	tile_space,
	Tiles.unformed(),
	Tiles.dirt_2(),
	[(10, Tiles.tree_1()),
	 (20, Tiles.grass()),
	 (40, Tiles.tall_grass())])
```

Now *that* is hot. Let's break down what's happening here.

In the `rng_selection` function, I pass in the tilemap (`tile_space`) to work with. I also pass in a `mask_type`, which is the tile type we're saying is okay to replace; a `fill_type`, which is the tile type we'll use to fill anything that doesn't get covered during the randomization process; and finally an `asset_list`, which is a list of tuples that assign a high threshold to a tile type. That is, just like in our clunkier example we assigned tile types to ranges, like 10:20 for `Tiles.grass()`, we're providing the upper bound of each threshold in our asset listing. That would be the 20, in the relevant example.

The reason we pass in just the upper bound is because we're going to be algorithmically setting the lower bound inside the randomization function. Alright, so let's check out what's happening there.

```python
	selection_set = np.full(100, fill_value=fill_type)

	low = 0
	for threshold, tile_type in asset_list:
		selection_set[low:threshold] = tile_type
		low = threshold
```

First, we're going to 

```python	
	mask = (tile_space == mask_type)
	rng_samples = np.random.randint(low=0, high=100, size=(64, 64))

	np.putmask(tile_space, mask, selection_set[rng_samples])
	return tile_space
```
