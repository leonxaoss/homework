document.addEventListener('DOMContentLoaded', function () {

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canWidth = canvas.width;
    const canHeight = canvas.height;

    const START_POSITION_Y = 10;
    const HEAD_RADIUS = canvas.width/40;
    const NECH_WIDTH = HEAD_RADIUS/2;
    const NECH_HEIGHT = HEAD_RADIUS/5;
    const BODY_WIDTH = HEAD_RADIUS * 4;
    const BODY_HEIGHT = canvas.height/3;
    const HAND_WIDTH = BODY_WIDTH / 6;
    const HAND_HEIGHT = BODY_HEIGHT / 1.5;
    const LEG_HEIGHT = BODY_HEIGHT;
    const LEG_WIDTH = BODY_HEIGHT/5;
    const EYE_RADIUS = HEAD_RADIUS/6;
    const MOUTH_RADIUS = HEAD_RADIUS/4;
    const BUTTON_RADIUS = BODY_WIDTH /15;

    ctx.fillStyle = 'green';

    // head
    ctx.beginPath();
    ctx.arc(canWidth/2, canHeight/START_POSITION_Y, HEAD_RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    // nech
    ctx.fillRect(canWidth/2 - NECH_WIDTH/2, canHeight/START_POSITION_Y + HEAD_RADIUS, NECH_WIDTH, NECH_HEIGHT);
    // body
    ctx.fillRect(canWidth/2 - BODY_WIDTH/2, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT, BODY_WIDTH, BODY_HEIGHT);
    // hand
    ctx.fillRect(canWidth/2 - BODY_WIDTH/2 - HAND_HEIGHT, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT, HAND_HEIGHT, HAND_WIDTH);
    ctx.fillRect(canWidth/2 + BODY_WIDTH/2, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT, HAND_HEIGHT, HAND_WIDTH);
    // leg
    ctx.fillRect(canWidth/2 - BODY_WIDTH/2, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT + BODY_HEIGHT, LEG_WIDTH, LEG_HEIGHT);
    ctx.fillRect(canWidth/2 + BODY_WIDTH/2 - LEG_WIDTH, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT + BODY_HEIGHT, LEG_WIDTH, LEG_HEIGHT);

    ctx.fillStyle = 'red';

    //eye
    ctx.beginPath();
    ctx.arc(canWidth/2 - HEAD_RADIUS/3, canHeight/START_POSITION_Y - HEAD_RADIUS/3, EYE_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canWidth/2 + HEAD_RADIUS/3, canHeight/START_POSITION_Y - HEAD_RADIUS/3, EYE_RADIUS, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'black';

    // mouth

    ctx.beginPath();
    ctx.ellipse(canWidth/2, canHeight/START_POSITION_Y + HEAD_RADIUS / 2, MOUTH_RADIUS, MOUTH_RADIUS + MOUTH_RADIUS/2, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = 'blue';

    // button
    for (let i = 1; i <= 3; i++){
        ctx.beginPath();
        ctx.arc(canWidth/2, canHeight/START_POSITION_Y + HEAD_RADIUS + NECH_HEIGHT + i * BUTTON_RADIUS * 5, BUTTON_RADIUS, 0, 2 * Math.PI);
        ctx.fill();
    }

});
