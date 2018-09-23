$(function() {

  /////////////////////////////////////////////////////////////////////////////
  // nav scroll logic - BEGIN
  /////////////////////////////////////////////////////////////////////////////
  const scrollTo = (e) => {
    e.preventDefault();
    const target = e.currentTarget.hash;
    $('html, body').animate({
      scrollTop: ($(target).offset().top) - 50
    }, 1500,'swing');
    return false;
  };
  /////////////////////////////////////////////////////////////////////////////
  // nav scroll logic - END
  /////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////
  // About Section logic - BEGIN
  /////////////////////////////////////////////////////////////////////////////
  let isAboutVisible = false;

  $(window).scroll(function() {
    var hT = $('#about').offset().top,
      hH = $('#about').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();

    if ( !isAboutVisible ) {
      if ( hT/2 <= wS ) {
        // After first time About Section scroll into view,
        // don't animate again.
        isAboutVisible = true;

        aboutChildren.each( (index, child) => {
          let t = setTimeout(function() {
            console.log('child ', child);
            let style = index % 2 === 0 ? { left: '10%' } : { left: '-5%' };
            $(child).animate(style, 3000, 'swing')
          }, 3000 * index + 1);
        })
      }
    }
  });
  /////////////////////////////////////////////////////////////////////////////
  // About Section logic - END
  /////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////
  // Project Section typing logic - BEGIN
  /////////////////////////////////////////////////////////////////////////////
  let isTypingCard1 = false;
  let isTypingCard2 = false;
  let isTypingCard3 = false;

  const type = (textSpan, text, delay, i, cardId) => {

    $(textSpan)
    .append(text.charAt(i))
    .delay(delay)
    .promise()
    .done(() => {
      if(i < text.length) {
        i++;
        if (cardId === 'card-1') { isTypingCard1 = true; }
        if (cardId === 'card-2') { isTypingCard2 = true; }
        if (cardId === 'card-3') { isTypingCard3 = true; }
        type(textSpan, text, delay, i, cardId)
      } else {
        // done typing.
        if (cardId === 'card-1') { isTypingCard1 = false; }
        if (cardId === 'card-2') { isTypingCard2 = false; }
        if (cardId === 'card-3') { isTypingCard3 = false; }
      }
    });

  };

  const typeText = (e) => {
    const $card = $(e.currentTarget);
    const cardId = $card.attr('id');

    let text = '';
    let textSpan = '';
    const i = 0;

    // Card 1
    if (cardId === 'card-1' && isTypingCard1 ) {
      // Handles when User Enters, Leaves,
      // then Re-Enters Card Overlay before typing has finished.
      return;
    }
    if ( cardId === 'card-1') {
      text = 'Air Bites n Bars';
      textSpan = $('.text-span-1')[0];
    }

    // Card 2
    if (cardId === 'card-2' && isTypingCard2 ) {
      // Handles when User Enters, Leaves,
      // then Re-Enters Card Overlay before typing has finished.
      return;
    }
    if ( cardId === 'card-2') {
      text = 'somm assistance';
      textSpan = $('.text-span-2')[0];
    }

    // Card 3
    if (cardId === 'card-3' && isTypingCard3 ) {
      // Handles when User Enters, Leaves,
      // then Re-Enters Card Overlay before typing has finished.
      return;
    }
    if ( cardId === 'card-3') {
      text = 'Diners, Drive-ins & Dives Tracker';
      textSpan = $('.text-span-3')[0];
    }

    $(textSpan).empty();
    type(textSpan, text, 300, i, cardId);

  };
  /////////////////////////////////////////////////////////////////////////////
  // Projects Section typing logic - END
  /////////////////////////////////////////////////////////////////////////////

  // Handlers & const
  $('.nav-link a').on('click', (e) => {scrollTo(e)});
  $('.card').on('mouseenter', (e) => {typeText(e)});
  const aboutChildren = $('#about .content-wrapper').children();

});
