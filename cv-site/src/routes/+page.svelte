<script>
    import PersonalInfo from "../components/PersonalInfo.svelte";
    import Skills from "../components/Skills.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
  
    const links = [
      { name: "Контакты", id: "personal-info" },
      { name: "Навыки", id: "skills" },
      { name: "Образование", id: "education" },
      { name: "Опыт работы", id: "experience" },
    ];
  </script>
  
  
  <main class="bg-background text-text min-h-screen">
    <nav class="bg-primary text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="font-heading text-2xl">Novis616</h1>
        <ul class="flex gap-6">
          {#each links as link}
            <li>
              <a href="#{link.id}" class="hover:text-secondary">{link.name}</a>
            </li>
          {/each}
        </ul>
      </div>
    </nav>
    
    <!-- Главный раздел -->
    <section class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      <h2 class="font-heading text-4xl text-primary mb-4 text-center">Добро пожаловать!</h2>
      <p class="text-lg leading-relaxed text-center">
        Я — разработчик, увлеченный созданием красивых и функциональных интерфейсов. Это мое резюме, где вы можете узнать больше обо мне, моих навыках и опыте.
      </p>
    </section>
  
    <!-- Секции -->
    <PersonalInfo />
    <Skills />
    <Education />
    <Experience />
  
    <!-- Подвал -->
    <footer class="bg-primary text-white py-6">
      <div class="container mx-auto text-center">
        <p class="font-sans text-sm">&copy; 2025 Руслан Соколов. Все права защищены.</p>
      </div>
    </footer>
  </main>
  
  <style>
    .container {
      max-width: 1200px;
    }
  </style>
  