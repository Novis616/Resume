<script>
  import "../app.css";

  export let skills = ["JavaScript", "Svelte", "HTML", "CSS", "Git", "Node.js"];
</script>

<section id="skills" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
  <h2 class="font-heading text-4xl text-primary mb-4 text-center">Навыки</h2>

  <ul class="list-disc pl-6 space-y-3">
    {#each skills as skill}
      <li class="text-lg leading-relaxed text-center">{skill}</li>
    {/each}
  </ul>
</section>

<style>
  section {
    margin-bottom: 1.5rem;
  }
  li {
    list-style-type: none; /* Убираем маркеры */
   }
</style>
