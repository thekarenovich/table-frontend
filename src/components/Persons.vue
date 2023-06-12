<template>
  <div class="container">
    <h1 class="text-center">Список людей</h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Идентификатор</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Email</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="person in persons" :key="person.id">
        <td>{{ person.id }}</td>
        <td>{{ person.firstName }}</td>
        <td>{{ person.lastName }}</td>
        <td>{{ person.contacts.email }}</td>
        <td>{{ person.contacts.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PersonService from '../services/PersonService';

export default {
  name: 'PersonsList',
  data() {
    return {
      persons: []
    };
  },
  methods: {
    getPersons() {
      PersonService.getPersons().then((response) => {
        this.persons = response.data;
      });
    }
  },
  created() {
    this.getPersons();
  }
};
</script>
