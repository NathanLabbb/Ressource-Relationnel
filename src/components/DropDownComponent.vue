<template>
  <div @click="toggleDropdown" class="dropdown">
    <button >{{ firstdisplay }}</button>
    <ul v-if="isOpen" class="dropdown-list w-56">
      <li v-for="option in options" :key="option.id" @click="selectOption(option)" class="p-6">
        <a :href="option.name">{{ option.name }}</a>
      </li>
    </ul>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="pl-2 w-4">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: null,
      firstdisplay: 'To add Here',
      options: [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        // Ajoutez autant d'options que nécessaire
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.name;
      this.isOpen = false;
      this.$emit('option-selected', option);
    }
  }
};
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  padding: 20px;
  margin: 0;
  list-style-type: none;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}


.dropdown-list li:hover {
  background-color: #ddd;
}
</style>
