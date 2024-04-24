window.addEventListener("DOMContentLoaded", function () {
  const persons = [
    {
      id: 1,
      name: "Chathura Dilshan",
      job: "Full Stack Developer",
      img: "person1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita debitis repellendus magnam quis sed ea cumque fugiat assumenda quod exercitationem soluta voluptates aperiam cum ex inventore sunt, aliquam necessitatibus? Sapiente eos, numquam quae, suscipit dolor ipsam error nulla nam iusto sint illum odio commodi saepe praesentium ipsum ex atque.",
    },
    {
      id: 2,
      name: "Dilshan Manoj",
      job: "Front End Developer",
      img: "person2.jpg",
      description:
        "A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush. Lots of different kinds of animals make their home in China.",
    },
    {
      id: 3,
      name: "Chamith Udayanga",
      job: "Back End Developer",
      img: "person3.webp",
      description:
        "In order to write a good paragraph, just follow the simple steps once you've decided on a topic. Step 1 is to write an outline using just a few words to get the structure. Step 2 is to write the topic sentence. Step 3 is to write the detail sentences that relate to the topic. Step 4 is to write the concluding sentence. Step 5 is to put them all together and writ",
    },
    {
      id: 4,
      name: "Krishan Madhusanka",
      job: "UI/UX Developer",
      img: "person4.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita debitis repellendus magnam quis sed ea cumque fugiat assumenda quod exercitationem soluta voluptates aperiam cum ex inventore sunt, aliquam necessitatibus? Sapiente eos, numquam quae, suscipit dolor ipsam error nulla nam iusto sint illum odio commodi saepe praesentium ipsum ex atque.",
    },
  ];

  const name = document.getElementById("name");
  const job = document.getElementById("job");
  const description = document.getElementById("description");
  const img = document.getElementById("img");

  const prevBtn = document.querySelector("#prev-btn");
  const nextBtn = document.querySelector("#next-btn");
  const randomBtn = document.querySelector("#random-btn");

  let currentPerson = 0;
  showPerson();

  nextBtn.addEventListener("click", function () {
    currentPerson++;
    if (currentPerson > persons.length - 1) {
      currentPerson = 0;
    }
    showPerson();
  });

  prevBtn.addEventListener("click", function () {
    currentPerson--;
    if (currentPerson < 0) {
      currentPerson = persons.length - 1;
    }
    showPerson();
  });

  randomBtn.addEventListener("click", function () {
    // console.log("Clicked");
    currentPerson = Math.floor(Math.random() * persons.length);
    showPerson();
  });
  function showPerson() {
    console.log(currentPerson);
    const item = persons[currentPerson];
    name.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.description;
    img.src = item.img;
  }
});
