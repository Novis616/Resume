<script>
  import "../app.css";

  export let experiences = [
    {
      company: "Фриланс",
      role: "Frontend Developer",
      period: "2022 - 2023",
      description: "Разработка и оптимизация интерфейсов для веб-приложений."
    }
  ];
</script>

<section id="experience" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
  <h2 class="font-heading text-4xl text-primary mb-4 text-center">Опыт работы</h2>

  {#each experiences as exp}
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-800 text-center">{exp.company}</h3>
      <p class="text-lg text-black-600 text-center"><strong>{exp.role}</strong> ({exp.period})</p>
      <p class="text-lg leading-relaxed text-center">{exp.description}</p>
    </div>
  {/each}
</section>

<style>
  section {
    margin-bottom: 1.5rem;
  }
</style>
