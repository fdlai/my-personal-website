//create canvas background
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create player spaceship
class Spaceship {
    constructor() {
        
        const image = new Image(); //creates and returns a new HTMLImageElement object representing an HTML <img> element
        image.src = './img/space.png';

        image.addEventListener("load", (event) => { //https://www.devdoc.net/web/developer.mozilla.org/en-US/docs/DOM/window.onload.html
            this.image = image;
            this.width = image.width * .75;
            this.height = image.height * .75;
            this.position = {
                x: (canvas.width / 2) - (this.width / 2),
                y: canvas.height - this.height - 15
            }
        });
    }

    render() {
        if (this.image) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); //draws an image onto the canvas
        }
    }
}

const spaceship = new Spaceship();

function animate() { //continually render our spaceship
    window.requestAnimationFrame(animate); //calls a specified function to update an animation right before the next repaint
    spaceship.render();
}
animate();