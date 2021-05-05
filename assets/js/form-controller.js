// scripts to form
function submitForm() {
  const data = {
    degreeOfProximity: $('input[name=degreeOfProximity]:checked').val(),
    flexibility: $('.flexibility>li.active').val(),
    accessibility: $('.accessibility>li.active').val(),
    energy: $('.energy>li.active').val(),
    stability: $('.stability>li.active').val(),
    challenge: $('.challenge>li.active').val(),
    mood: $('.mood>li.active').val(),
    competitiveness: $('.competitiveness>li.active').val(),
    sufficiency: $('.sufficiency>li.active').val(),
    involvement: $('.involvement>li.active').val(),
    friendly: $('.friendly>li.active').val(),
    assertiveness: $('.assertiveness>li.active').val(),
    confidence: $('.confidence>li.active').val(),
    patience: $('.patience>li.active').val(),
    discipline: $('.discipline>li.active').val(),
    optimism: $('.optimism>li.active').val(),
    changes: $('.changes>li.active').val(),
    motivation: $('.motivation>li.active').val(),
    problemSolver: $('.problemSolver>li.active').val(),
    teamWork: $('.teamWork>li.active').val(),
    takeRisks: $('.takeRisks >li.active').val(),
    physicalForm: $('.physicalForm>li.active').val(),
    bodyLanguage: $('.bodyLanguage>li.active').val(),
    workPosture: $('.workPosture>li.active').val(),
    receptivity: $('.receptivity>li.active').val(),
    proactivity: $('.proactivity>li.active').val(),
    senseHumor: $('.senseHumor>li.active').val(),
  };

  if(validate(data)) {
    createFormResponse(data);
  }
}

function createFormResponse(data) {
  fetch('https://api-stress-response-form.herokuapp.com/answers', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (response) {
	  if (response.ok) {
      $('.modal').hide();
		  alert('Obrigada por ter empenhado o seu tempo para me ajudar fazendo essa avaliação! 🥰');
	  }
	  return Promise.reject(response);
  }).then(function (data) {
  	console.log(data);
  }).catch(function (error) {
    alert('Deu alguma coisa errada com a conexão no servidor! Pode tentar mais uma vez ou me mandar uma mensagem avisando que o heroku quebrou... 😭');
	  console.warn('Something went wrong.', error);
  });
}

function changeSelectOption(query, list) {
  $('.' + query + '>li').removeClass('active');
  $(list).addClass('active');
}

function validate(data) {
  if (data.degreeOfProximity === undefined) {
    alert('Opa, esqueceu de dizer qual é o seu grau de proximidade comigo! 😁');
    $('input[name=degreeOfProximity]').focus();
    
    return false;
  } else if (data.flexibility === undefined) {
    alert('Esqueceu de preencher sobre a minha flexibilidade! 😀');
    $('.flexibility>li.active').focus();
    
    return false;
  } else if (data.accessibility === undefined) {
    alert('Esqueceu de dizer que sou acessível! 😗');
    $('.accessibility>li.active').focus();
    
    return false;
  } else if (data.energy === undefined) {
    alert('Esqueceu de preencher sobre a minha energia! 💪');
    $('.energy>li.active').focus();
    
    return false;
  } else if (data.stability === undefined) {
    alert('Esqueceu de preencher sobre a minha firmeza! 😲');
    $('.stability>li.active').focus();
    
    return false;
  } else if (data.challenge === undefined) {
    alert('Esqueceu de preencher se sou medrosa ou não! 🤐');
    $('.challenge>li.active').focus();
    
    return false;
  } else if (data.mood === undefined) {
    alert('Esqueceu de preencher sobre o meu humor equilibrado! (❁´◡`❁)');
    $('.mood>li.active').focus();
    
    return false;
  } else if (data.competitiveness === undefined) {
    alert('Esqueceu de preencher se me acha competitiva! 😶');
    $('.competitiveness>li.active').focus();
    
    return false;
  } else if (data.sufficiency === undefined) {
    alert('Esqueceu de preencher sobre a minha auto-suficiência! 😎');
    $('.sufficiency>li.active').focus();
    
    return false;
  } else if (data.involvement === undefined) {
    alert('Esqueceu de preencher se sou envolvida! 😢');
    $('.involvement>li.active').focus();
    
    return false;
  } else if (data.friendly === undefined) {
    alert('Esqueceu de marcar que sou amigável! 🤣');
    $('.friendly>li.active').focus();
    
    return false;
  } else if (data.assertiveness === undefined) {
    alert('Esqueceu de preencher se sou assertiva! ¯\_(ツ)_/¯');
    $('.assertiveness>li.active').focus();
    
    return false;
  } else if (data.confidence === undefined) {
    alert('Esqueceu de preencher sobre a minha confiança! 😏');
    $('.confidence>li.active').focus();
    
    return false;
  } else if (data.patience === undefined) {
    alert('Esqueceu de preencher sobre a minha paciência! 😌');
    $('.patience>li.active').focus();
    
    return false;
  } else if (data.discipline === undefined) {
    alert('Esqueceu de marcar que sou disciplinada! ಥ_ಥ');
    $('.discipline>li.active').focus();
    
    return false;
  } else if (data.optimism === undefined) {
    alert('Esqueceu de preencher sobre o meu otimismo! 😃');
    $('.optimism>li.active').focus();
    
    return false;
  } else if (data.changes === undefined) {
    alert('Esqueceu de marcar que sou aberta a mudanças! ಠ_ಠ');
    $('.changes>li.active').focus();
    
    return false;
  } else if (data.motivation === undefined) {
    alert('Esqueceu de preencher que sou motivada! 🤗');
    $('.motivation>li.active').focus();
    
    return false;
  } else if (data.problemSolver === undefined) {
    alert('Esqueceu de preencher que sou ótima resolvendo problemas! 😋');
    $('.problemSolver>li.active').focus();
    
    return false;
  } else if (data.teamWork === undefined) {
    alert('Esqueceu de preencher sobre o meu trabalho em equipe! ✌');
    $('.teamWork>li.active').focus();
    
    return false;
  } else if (data.takeRisks === undefined) {
    alert('Esqueceu de preencher se gosto ou não de me arriscar! 🚀');
    $('.takeRisks>li.active').focus();
    
    return false;
  } else if (data.physicalForm === undefined) {
    alert('Esqueceu de preencher sobre a minha boa forma física! 😂');
    $('.physicalForm>li.active').focus();
    
    return false;
  } else if (data.bodyLanguage === undefined) {
    alert('Esqueceu de preencher sobre a minha linguagem corporal! 🤔');
    $('.bodyLanguage>li.active').focus();
    
    return false;
  } else if (data.workPosture === undefined) {
    alert('Calma que tá acabando! Faltou sobre a minha postura no trabalho! 🥺');
    $('.workPosture>li.active').focus();
    
    return false;
  } else if (data.receptivity === undefined) {
    alert('Quase lá! Faltou dizer se sou receptiva ou defensiva! 🤨');
    $('.receptivity>li.active').focus();
    
    return false;
  } else if (data.proactivity === undefined) {
    alert('Falta pouco! Só marcar que sou pró-ativa ali! 😛');
    $('.proactivity>li.active').focus();
    
    return false;
  } else if (data.senseHumor === undefined) {
    alert('Não desiste de mim! Faltou o último! 😫');
    $('.senseHumor>li.active').focus();
  }

  return true;
}