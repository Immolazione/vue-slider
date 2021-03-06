console.log('VUE.JS OK', Vue);

Vue.config.devtools = true;

/*
Descrizione:
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
*/

const app = new Vue ({
    el: '#root',
    data: {
        currentImg: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg'
        ]
    },
    methods: {

        isActive(index){
            return index === this.currentImg;
        },

        setPic(index){
            this.currentImg = index;
        },

        prevPic(){
            if (this.currentImg === 0) {
                this.currentImg = this.images.length - 1;
            } else {
                this.currentImg--;
            }
        },

        nextPic(){
            if (this.currentImg === this.images.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg++;
            }
        },
    },
});