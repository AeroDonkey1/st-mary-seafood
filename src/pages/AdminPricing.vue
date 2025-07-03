<template>
  <div class="admin-pricing">
    <h1>Pricing Manager</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price/lb</th>
          <th>In Stock</th>
          <th>Image URL</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in items" :key="item.id">
          <td><input v-model="item.name" /></td>
          <td><input v-model="item.description" /></td>
          <td><input type="number" v-model.number="item.pricePerLb" step="0.01" /></td>
          <td><input type="checkbox" v-model="item.inStock" /></td>
          <td><input v-model="item.image" /></td>
          <td>
            <button @click="updateItem(item)">💾</button>
            <button @click="removeItem(item.id)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="addItem">➕ Add New Item</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

const fetchItems = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing`)

  items.value = await res.json()
}

const addItem = async () => {
  const newItem = {
    name: 'New Item',
    description: '',
    pricePerLb: 0.0,
    inStock: true,
    image: ''
  }

  const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newItem)
  })

  const saved = await res.json()
  items.value.push(saved)
}

const updateItem = async (item) => {
  await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing/${item.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  })
}

const removeItem = async (id) => {
  await fetch(`${import.meta.env.VITE_API_BASE}/api/pricing/${id}`, {
    method: 'DELETE'
  })
  items.value = items.value.filter(i => i.id !== id)
}

onMounted(fetchItems)
</script>

<style scoped>
.admin-pricing {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th, td {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

input[type='text'],
input[type='number'] {
  width: 100%;
}
button {
  margin-right: 4px;
}
</style>
