$(document).ready(function(){

    // Aqui estamos setando as opções do slick
    const slickOptions = {

        autoplay: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',

    }

    $('.slider').slick(slickOptions);


    // Aqui estamos chamando o Jquery e executando a função onclick do botão submit da newsletter
    $('footer__form-button').on('click', () => {

        // Aqui vamos pegar o que está entro do input de nossa newsletter
        const email = $('#email').val();

        Email.send({

            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'contato@studion.com',
            From : email,
            Subject : "Por favor me adicione na newsletter",
            Body : `Olá, eu gostaria de ser adicionado na newsletter do site.
            Meu e-mail é ${email}.
            
            Obrigado!
            `,
            
        }).then(

            message => alert(message)

        );


    });

});