function missingTime() {
  const eventDate = new Date("May, 22, 2020 11:59:00")
  const today = new Date()
  return eventDate - today
}

function days() {
  const days = Math.floor( missingTime() / (1000 * 60 * 60 * 24));
  document.querySelector(".day > .num").innerHTML = days > 9 ? days : `0${days}`;
}
function hours() {
  const hours = Math.floor(( missingTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hour > .num").innerHTML = hours > 9 ? hours : `0${hours}`;
}
function minutes() {
  const minutes = Math.floor((missingTime() % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".min > .num").innerHTML = minutes > 9 ? minutes : `0${minutes}`;
}
function seconds() {
  const seconds = Math.floor((missingTime() % (1000 * 60)) / 1000);
  document.querySelector(".sec > .num").innerHTML = seconds > 9 ? seconds : `0${seconds}`;
}
function expired() {
  document.querySelector(".countdown").innerHTML = '<span class="expired">TEMPO ESGOTADO!</span>';
}

function updateTime() {
  if(missingTime() > 0){
    setTimeout(function() {
      days()
      hours()
      minutes()
      seconds()
      updateTime()

    }, 1000)
  } else {
    expired()
  }
}

updateTime()
