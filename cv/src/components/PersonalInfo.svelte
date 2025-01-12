<script>
  import "../app.css";

  export let name = "Руслан Соколов";
  export let position = "Frontend Developer";
  export let email = "ruslasha616@gmail.com";
  export let phone = "+7 (996) 008-96-52";
  export let linkedin = "https://t.me/Novis616";
</script>

<section id="personal-info" class="py-16 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
  <h2 class="font-heading text-4xl text-primary mb-4 text-center">Контактная информация</h2>
  
  <div class="space-y-4 text-center">
    <p class="text-lg"><strong>Имя:</strong> <span class="text-lg leading-relaxed text-center">{name}</span></p>
    <p class="text-lg"><strong>Должность:</strong> <span class="text-lg leading-relaxed text-center">{position}</span></p>
    <p class="text-lg">
      <strong>Email:</strong> 
      <a href="mailto:{email}" class="text-lg leading-relaxed text-center">{email}</a>
    </p>
    <p class="text-lg">
      <strong>Телефон:</strong> <span class="text-lg leading-relaxed text-center">{phone}</span>
    </p>
    <p class="text-lg">
      <strong>Telegram:</strong> 
      <a href="https://{linkedin}" target="_blank" class="text-lg leading-relaxed text-center hover:text-blue-700">{linkedin}</a>
    </p>
  </div>
</section>

<style>
  section {
    margin-bottom: 1.5rem;
  }
</style>
