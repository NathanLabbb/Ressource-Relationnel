<template>
  <div class="container mx-auto bg-gray-100 p-4 border border-gray-300 rounded">
    <nav class="mb-4" aria-label="Breadcrumb">
      <ol class="flex">
        <li><a href="#" class="text-gray-500 hover:text-gray-700">Accueil</a></li>
        <li class="mx-2"><svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></li>
        <li><a href="#" class="text-gray-500 hover:text-gray-700">{{ category }}</a></li>
        <li class="mx-2"><svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></li>
        <li class="text-gray-700" aria-current="page">{{ article.title }}</li>
      </ol>
    </nav>
    <header class="text-center border-b border-gray-300 pb-4 mb-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ article.title }}</h1>
      <div class="text-gray-700 italic">{{ article.author }} - {{ article.date }}</div>
    </header>
    <div class="content text-lg leading-7 text-gray-800">
      <p v-for="paragraph in article.content" :key="paragraph.id">{{ paragraph.text }}</p>
    </div>
    <footer class="mt-6 pt-4 border-t border-gray-300">
      <p class="text-gray-700">Tags: <span class="font-bold">{{ article.tags.join(', ') }}</span></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: 'Titre de l\'article',
        author: 'Auteur',
        date: 'Date',
        content: [
          { id: 1, text: 'Contenu de l\'article...' },
          { id: 2, text: 'Plus de contenu...' }
        ],
        tags: ['Tag1', 'Tag2', 'Tag3']
      },
      category: 'Catégorie'
    };
  }
};
</script>
