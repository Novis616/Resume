<script>
  import "../app.css";

  export let education = [
    {
      institution: "ННГАСУ",
      degree: "Бакалавр, Программная инженерия",
      period: "2021 - 2024"
    },
    {
      institution: "ПГТУ",
      degree: "Бакалавр, Программная инженерия",
      period: "2024 - 2026"
    }
  ];
</script>

<section id="education" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
  <h2 class="font-heading text-4xl text-primary mb-4 text-center">Образование</h2>

  {#each education as edu}
    <div class="mb-6">
      <h3 class="text-xl font-semibold text-gray-800 text-center">{edu.institution}</h3>
      <p class="text-lg text-black-600 text-center"><strong>{edu.degree}</strong> ({edu.period})</p>
    </div>
  {/each}
</section>

<style>
  section {
    margin-bottom: 1.5rem;
  }
</style>
