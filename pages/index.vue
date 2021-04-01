<template>
  <div class="layout-grid">
    <TitleBlock />
    <ContactBlock />
    <GardenBlock :articles=articles />
    <ProjectBlock :projects=projects />
  </div>
</template>

<script>
import TitleBlock from '@/components/TitleBlock';
import ContactBlock from '@/components/ContactBlock';
import GardenBlock from '@/components/GardenBlock';
import ProjectBlock from '@/components/ProjectBlock';

export default {
  layout: 'default',
  components: {
    TitleBlock,
    ContactBlock,
    GardenBlock,
    ProjectBlock
  },
  async asyncData ({ $content, params })
  {
    const articleData = await $content('articles', params.slug)
      .only(['title', 'createdAt', 'growth', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    const projectData = await $content('projects', params.slug)
      .only(['title', 'createdAt', 'description', 'img', 'slug'])
      .sortBy('createdAt')
      .fetch()

    let articles = []
    let projects = []
    if (articleData.length > 3) {
      for (let i = 0; i <= 3; i++) {
        articles.push(articleData[i]);
      }
    } else {
      articles = articleData
    }

    if (projectData.length > 3) {
      for (let i = 0; i <= 3; i++) {
        projects.push(projectData[i]);
      }
    } else {
      projects = projectData
    }

    return {
      articles,
      projects
    }
  }
}
</script>
