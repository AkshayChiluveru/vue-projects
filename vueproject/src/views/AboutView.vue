<script setup lang="ts">
import { ref } from 'vue';
var message = ref('');
var role = ref('developer');
var list = ref('List');
const editing = ref(false);
const items = ref([
  { id: 1, label: 'Akshay', purchased: true, highPriority: true },
  { id: 2, label: 'Bahubali', purchased: true, highPriority: true },
  { id: 3, label: 'Katappa', purchased: true, highPriority: false },
  { id: 4, label: 'Amarendra', purchased: false, highPriority: true },
]);
const newItem = ref('');
const newItemHighPriority = ref(false);
const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value,
  });
  newItem.value = '';
  newItemHighPriority.value = '';
};
const doEdit = (e: boolean) => {
  editing.value = e;
  newItem.value = '';
  newItemHighPriority.value = '';
};
const togglepurchased = (item) => {
  item.purchased = !item.purchased;
};
</script>

<template>
  <p>My name is {{ message }} and I am {{ role }}</p>
  <input v-model="message" placeholder="enter name" />
  <input v-model="role" placeholder="enter role" />
  <div>
    <h1>{{ list }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Item
    </button>
  </div>
  <div v-if="editing" @submit.prevent="saveItem" class="add-item-form">
    <input v-model.trim="newItem" type="text" placeholder="add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button v-bind:disabled="newItem.length < 2" class="btn btn-primary">
      save item
    </button>
  </div>
  <ul>
    <li
      v-for="(item, index) in items"
      @click="togglepurchased(item)"
      :key="item.id"
      class="static-class"
      :class="{ strikeout: item.purchased, priority: item.highPriority }"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>

<style>
h1 {
  padding: 10px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
