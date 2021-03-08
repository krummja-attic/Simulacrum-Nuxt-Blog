<template>
    <div class="container flex flex-row mb-8">
        <div id="exno" class="pr-6">({{ exno }})</div>
        <div class="flex flex-col">
            <table id="gloss-table">
                <tr id="gla" class="italic"> </tr>
                <tr id="glb"> </tr>
            </table>
            <table>
                <tr>
                    <td id="glft">'{{ glft }}'</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
let uuid = 0;

export default {
    props: {
        exno: String,
        gla: String,
        glb: String,
        glft: String
    },

    beforeCreate() {
        this.uuid = uuid.toString();
        uuid += 1;
    },

    render (h) {
        return this.setup(h);
    },

    methods: {
        setup(h) {
            let _gla = this.gla.split(" ");
            let _glb = this.glb.split(" ");

            let gloss_a = document.getElementById("gla");
            let gloss_b = document.getElementById("glb");
            gloss_a.id = gloss_a.id + this.uuid;
            gloss_b.id = gloss_b.id + this.uuid;

            for (let i in _gla) {
                let word = _gla[i];
                let gloss_a_col = document.createElement("td");
                gloss_a_col.className = "gloss_a";
                gloss_a_col.style.paddingRight = "10px";
                gloss_a_col.appendChild(document.createTextNode(word));
                gloss_a.appendChild(gloss_a_col);
            }

            for (let i in _glb) {
                let word = _glb[i];
                let _word = document.createTextNode(word);
                let gloss_b_col = document.createElement("td");
                gloss_b_col.className = "gloss_b";
                if (word === word.toUpperCase()) {
                    gloss_b_col.style.fontSize = "12pt";
                    gloss_b_col.style.paddingRight = "10px";
                } else {
                    gloss_b_col.style.paddingRight = "10px";
                }
                gloss_b_col.appendChild(_word);
                gloss_b.appendChild(gloss_b_col);
            }
        }
    },
}
</script>

<style sass scoped>
#gloss-table {
    text-align: left;
}

#gla {
    font-style: italic;
}
</style>
