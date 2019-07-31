import "./import/modules";

// /* FORM SEND */

// function valEl(el,modalForm,modalErrorForm){
//     el.validate({
//         ignore: ":disabled",
//         rules:{
//             tel:{
//                 required:true,
//                 regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
//             },
//             name:{
//                 required:true
//             },
//             lastname:{
//                 required:true
//             },
//             email:{
//                 required:true,
//                 email:true
//             },
//             address:{
//                 minlength:10,
//                 required:true
//             },
//             policy_accept:{
//                 required: true
//             },
//             time:{
//                 required: true
//             }
//         },
//         messages:{
//             tel:{
//                 required:'С телефоном что-то не так',
//                 regex:'С телефоном что-то не так'
//             },
//             name:{
//                 required:'С именем что-то не так',
//             },
//             lastname:{
//                 required:'Фамилия обязательна для заполнения',
//             },
//             email:{
//                 required:'С адресом электронной почты что-то не так',
//                 email:'С адресом электронной почты что-то не так'
//             },
//             address:{
//                 minlength: 'Минимальное кол-во символов не менее 10',
//                 required:'Заполните поле с адресом доставки',
//             },
//             policy_accept:{
//                 required: 'Вы должны согласиться с обработкой персональных данных',
//             },
//             time:{
//                 required: 'Вы должны сообщить об удобном времени для звонка',
//             }
//         },
//         errorPlacement: function(error, element) {
//             error.prependTo($(modalErrorForm));
//         },
//         errorLabelContainer: $('div.errmsg'),
//         wrapper: "div",
//         invalidHandler: function() {
//             $(modalErrorForm).modal('show');
//             $($(modalErrorForm)).modal().on('hide.bs.modal', function (e) {
//                 $(this).each(function(){
//                     $('.errmsg').find('div').remove();
//                 });
//             });
//         },
//         submitHandler: function (form) {
//             var $form = $(form);
//             var $formId = $(form).attr('id');
//             switch($formId){
//                 case'goToNewPage':
//                     $.ajax({
//                         type: 'POST',
//                         url: $form.attr('action'),
//                         data: $form.serialize(),
//                     })
//                         .always(function (response) {
//                             //ссылка на страницу "спасибо" - редирект
//                             location.href='thanks.html';
//                             //отправка целей в Я.Метрику и Google Analytics
//                             return true;
//                         });
//                     break;
//                 case'popupResult':
//                     $.ajax({
//                         type: 'POST',
//                         url: $form.attr('action'),
//                         data: $form.serialize(),
//                     })
//                         .always(function (response) {
//                             setTimeout(function (){
//                                 $('body').css({'padding':'0'});
//                                 if(modalForm == '#thanksModal') {
//                                     $('#emailModal').modal('hide');
//                                 };
//                                 $($(modalForm)).modal('show');
//                                 $form.trigger('reset');
//                                 yaCounter51341903.reachGoal('TARGET');
//                                 return true;
//                             },1100);
//                         });
//                     break;
//             }
//             return false;
//         }
//     })
// };
