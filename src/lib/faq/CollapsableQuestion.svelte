<script>
  // your script goes here
  export let nbr = "n°";
  export let content = {
    question: "Question ?",
    answer: "Answer",
  };
</script>

<!-- markup (zero or more items) goes here -->
<div
  class="bg-gray-100 rounded-md transition-colors duration-200 hover:bg-gray-200 pointer-events-none cursor-pointer"
>
  <div class="flex px-4 py-2 pointer-events-auto">
    <span class="heading heading-5 mr-2">{nbr}.</span>
    <h5 class="heading heading-5">{content.question}</h5>
    <button class="ml-auto mr-0">More</button>
  </div>
  <div class=" pointer-events-none h-0 box-border overflow-hidden">
    <div class="p-4 ">
      <p>{content.answer}</p>
    </div>
  </div>
</div>

<style>
  /* your styles go here */
</style>
