$(function() {


  const scrollTo = (e) => {
    e.preventDefault();
    const target = e.currentTarget.hash;
    $('html, body').animate({
      scrollTop: ($(target).offset().top) - 50
    }, 1500,'swing');
    return false;
  };

  // // dynamic sticky nav - BEGIN
  // const navOffset = $('.nav').offset();
  // const navOffsetTop = navOffset.top;
  // window.onscroll = (e) => {stickyNav(e)};
  //
  // const stickyNav = (e) => {
  //   console.log('stickyNav ran');
  //   console.log('window.pageYOffset', window.pageYOffset);
  //   console.log('navOffsetTop', navOffsetTop);
  //   if (window.pageYOffset > navOffsetTop) {
  //     $('.nav').addClass("sticky");
  //     $('.nav a').addClass("a-text");
  //   } else {
  //     $('.nav').removeClass("sticky");
  //     $('.nav a').removeClass("a-text");
  //   }
  // };
  // // dynamic sticky nav - END


  // function typeText(item, text, delay, i) {
  //   $(item).append(text.charAt(i))
  //          .delay(delay)
  //          .promise()
  //          .done(function() {
  //            if(i<text.length) {
  //              i++;
  //              typeText(item, text, delay, i);
  //            }
  //          });
  // }
  //
  // var text = 'Some Text';
  // var item = $("div");

  let isTyping = false;
  const type = (textSpan, text, delay, i) => {
    console.log('type ran');

    console.log('span html =', $(textSpan).html());

    $(textSpan)
    .append(text.charAt(i))
    .delay(delay)
    .promise()
    .done(() => {
      if(i < text.length) {
        i++;
        isTyping = true;
        type(textSpan, text, delay, i)
      } else {
        console.log('done typing');
        isTyping = false;
      }
    });

  };

  const typeText = (e) => {
    console.log('typeText ran');
    const $card = $(e.currentTarget);
    const cardId = $card.attr('id');
    const cardText1 = 'Air Bites n Bars';
    const cardText2 = 'somm assistance';
    const cardText3 = 'Diners, Drive-ins & Dives Tracker';
    let text = '';
    let textSpan = '';
    let i = 0;

    if (cardId === 'card-1') {
      text = cardText1;
      textSpan = $('.text-span-1')[0];

    }

    const $textSpan = $(textSpan);
    console.log('$card', $card);
    console.log('cardId', cardId);
    console.log('textSpan', textSpan);
    console.log('textSpan.html()', $(textSpan).html());

    // if ($textSpan.html()) {
    if (isTyping) {
      // in case User mousenters again before text() has completed.
      // console.log('if $textSpan.html()', $textSpan.html());
      console.log('if isTyping ');
      return;
    } else {
      console.log('in else');
      $textSpan.empty();
      type(textSpan, text, 500, i);
    }

    // $textSpan.empty();
    // console.log('$textSpan ', $textSpan);
    // type(textSpan, text, 500, i);

  };

  // const cardMouseleave = (e) => {
  //   const $card = $(e.currentTarget);
  //   const cardId = $card.attr('id');
  //   const textSpan = $('.text-span-1')[0];
  //   $(textSpan).empty();
  // };

  // Handlers
  $('.nav-link a').on('click', (e) => {scrollTo(e)});
  $('.card').on('mouseenter', (e) => {typeText(e)});
  $('.card').on('mouseleave', (e) => {cardMouseleave(e)});

});
