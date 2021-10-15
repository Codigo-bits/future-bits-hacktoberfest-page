# LEARN BASICS OF HTML & CSS

This repository aims to teach participants the bases of web development and to make their first contribution to open source in this Hacktoberfest 2021. 🎉


The project is a web page that contains cards with the information of each collaborator of this repository, with the aim that the collaborator can put into practice the skills obtained throughout the event.


### Getting started

- Fork and clone this repository (```git clone <url_of_your_repo>```)
- Create your own branch with your name with ```git branch Bubu``` for example.
- On index.html, specifically in the collaborators section, add a new card following the next characteristics: 

```html
<div class="card">
   <img src = "Collaborator image" alt ="name or lastname" class="card-img top">
   <div class = "colab-info">
      <h4 class="colab-name"> Full name </h4>
      <ul class = "colab-items">
          <li class = "colab-item">Characteristic one</li>
          <li class = "colab-item">Characteristic two</li>
          <li class = "colab-item">Characteristic three</li>
      </ul>
   </div>
</div>
```
- Example of a card: 

```html
<div class="card">
   <img src = "https://i.imgur.com/3FmZKuU.jpg" alt ="Missa" class="card-img top">
   <div class = "colab-info">
      <h4 class="colab-name">@DBubu73</h4>
      <ul class = "colab-items">
          <li class = "colab-item">GitHub Campus Expert 🚩</li>
          <li class = "colab-item">Physics at UG 🐝</li>
          <li class = "colab-item">I love Puppies 🐶, Python 🐍 and JavaScript 💛</li>
      </ul>
   </div>
</div>
```

- Save changes.
- Commit & push changes to your repository.
- Finally open a pull request with your name and changes to this repository.

## Important ⚠
Remember to put an online link for your photo, local photos wont be accepted!