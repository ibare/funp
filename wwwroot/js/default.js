var step = 0;
var sence = [];
var intervalOfLength = 140;

sence.push({
  text: '음냐 음냐...',
  status: 'boring',
  auto: true
});

sence.push({
  text: '자는데 쿡쿡 찌르는 건 실례라구...',
  status: 'exclamation'
});

sence.push({
  text: '안녕? 난 욤이야',
  status: 'normal',
  auto: true
});

sence.push({
  text: '이 안에 살고 있는 날 용케 찾았구나?',
  status: 'normal',
  auto: true
});

sence.push({
  text: '넌 홍길동이지?',
  status: 'cutup',
  auto: true
});

sence.push({
  text: '난 오래전 부터 이 안에서 널 지켜보았지...',
  status: 'normal',
  next: 0
});

function stepHandler() {
  var current = sence[step];
  var auto = current.auto || false;

  console.log(step);

  $('#talkbox').text(current.text).fadeIn();
  $('#mainchar').attr('class', current.status);

  if(current.next == undefined) step++;
  else step = current.next;

  if(current.auto) {
    setTimeout(stepHandler, current.text.length * intervalOfLength);
  } else {
    setTimeout(function() { $('#talkbox').fadeOut() }, current.text.length * intervalOfLength);
  }
}

$(function() {
  $('#mainchar').bind('click', stepHandler);
});