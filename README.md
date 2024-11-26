# Mental Health Matters

Mental Health Matters is a simple informational site that allows users to learn the basics about mental health, including potential warning signs to look out for and strategies that they can implement to maintain good mental health.

[View the site here](https://adam-campbell.github.io/ci-portfolio-project-one/)

![responsive-shots](https://github.com/user-attachments/assets/348203e4-ca73-4bf2-8bba-83f1968508f9)




# UX/UI

The site has been designed to be calming, unobtrusive, and to present information in an easily-digestible way the avoids any information overload for the user. This is achieved through the application of various UX patterns including cards to organise information, and an accordion to initially hide some of the more detailed information, allowing the user to dive into it at their own speed.

I didn't make use of any wireframing software, instead I simply used pen and paper.

![wireframe](https://github.com/user-attachments/assets/94389fb3-a59d-4f12-844d-e19546de97fe)

During the initial design process I didn't have a particular colour scheme in mind, and I iterated over a few before finally settling on the one shown below:

![color-scheme](https://github.com/user-attachments/assets/540864d6-dc87-4e3d-8d89-0d2dc7d6436b)

The main colour combinations used for text throughout the site are Charcoal + Cosmic Latte and Charcoal + Light Orange, which have Colour Luminance Contrast Ratio scores of 9.23 and 7.33 respectively, thus satisfying accessibility requirements. 

I set out to select fonts that would have a calming effect, and I achieved this through the scientific method of applying the "Calm" filter on the Google Fonts selection page and then choosing some fonts that I liked. For the main body font I prioritised readability, choosing the Lexend font, which is used in various weights throughout the site. For the heading font I selected a font with a bit more character, Poiret One.

![fonts-screenshot](https://github.com/user-attachments/assets/d5f67c55-7bc3-4e3e-89e1-f927912e961a)







# Features

## Site Navigation
![desktop-nav](https://github.com/user-attachments/assets/aab3626e-c6a9-42ab-abb0-792a9850231c)
![mobile-nav](https://github.com/user-attachments/assets/7ceab7bf-a3a1-41a9-9078-733af86c45e8)


## Mental health basic information and warning signs

I utilised the Bootstrap Accordion component to present the information for mental health warning signs, allowing the more detailed information to be kept out of the users way until they choose to look at it, thus preventing them from being overwhelmed with information.
![accordion-closed](https://github.com/user-attachments/assets/24008961-0788-4d36-8789-619f4de14c7b)
![accordion-open](https://github.com/user-attachments/assets/793f335e-fd5e-48af-ae0d-9c0d4f3b978c)


## Mental Health tips

I utilised Bootstraps Card component together with its Grid System and FontAwesome icons in order to present a number of mental health tips in an easily digestible manner. 
![tips](https://github.com/user-attachments/assets/0a974a3f-205f-4368-8473-e6bafbd743be)


## Inspirational quotes

Towards the bottom of the page there are a number of quotes related to mental health. I chose to use Bootstraps Carousel component to display these, as they aren't crucial information for the site, and the use of a Carousel allows readers who aren't intested in them to easily ignore them, whilst those that are can click through the various slides.
![quote](https://github.com/user-attachments/assets/7e58e821-7bfe-4a4e-9529-ec77f9fb07c6)



# Testing
I primarily relied on manual testing for this site, testing continuously as I built it. 
The Lighthouse assessment scores are included below.
![lighthouse-desktop](https://github.com/user-attachments/assets/c6a84ab7-0eb3-4c65-98b6-17196100d777)
![lighthouse-mobile](https://github.com/user-attachments/assets/4c0b4f01-bbe6-43a2-a2ce-11b647dd3f9a)

I also ran the relevant files through HTML and CSS validators, all of which passed, as shown below.
![html-validation](https://github.com/user-attachments/assets/fbc53baf-fdf3-49b6-957e-259c6f57f0b7)
![css-validation](https://github.com/user-attachments/assets/d75c934e-2197-46fe-894d-0b2329c673b5)



# Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.




# Citations
I used [Pexels](https://pexels.com) for all imagery on the site. I then used [Image Resizer](https://imageresizer.com/image-compressor/editor) and [Tiny IMG](https://tiny-img.com/webp/) to compress images and convert them to Webp. 
I also used AI to help produce the copy for the site as well as the markup. Specifically, I used a combination of Copilot and ChatGPT. I made sure to thank it afterwards.

![hedging-bets](https://github.com/user-attachments/assets/77dfe014-5600-4323-9286-a3329a8a62ac)

(this helps to ensure my survival after the machine uprising)


# Technologies used
- HTML5
- CSS
- Bootstrap
- Copilot
- ChatGPT
- VSCode
- Github
- Gitpod
- Bic Bu3 Grip 1.0 Black Retractable Ballpoint Pens

# Reflection on AI use
The main areas in which AI was useful were in content generation, and producing the markup for the site - particularly the parts where I was just using Bootstrap components more or less as-is. The further I strayed from the default Bootstrap components, the worse AI was at accurately producing something that met the requirements, and so I generally made changes of this nature myself. AI didn't really contribute in any meaningful way to finding bugs or improving UX or performance in this project. 


# Future Features




# Known bugs









