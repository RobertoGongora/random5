const $image = document.getElementById('image');
const $seconds = document.getElementById('seconds');

let images = [
    'https://cdn.shopify.com/s/files/1/0512/8444/3315/products/3757_150x.jpg?v=1617880643',
    'https://cdn.shopify.com/s/files/1/0512/8444/3315/products/3759_150x.jpg?v=1617880644',
    'https://cdn.shopify.com/s/files/1/0512/8444/3315/products/3760_150x.jpg?v=1617880644',
    'https://cdn.shopify.com/s/files/1/0512/8444/3315/products/3762_150x.jpg?v=1617880644',
    'https://cdn.shopify.com/s/files/1/0512/8444/3315/products/3764_150x.jpg?v=1617880644',
];

let seconds = 5000;

let runner = () => {
    $image.style.backgroundImage = `url("${images[getRandom(4)]}")`;
    seconds = ($seconds.value || 5) * 1000;

    setTimeout(runner, seconds);
};

setTimeout(runner, seconds);

function getRandom(max) {
    return Math.floor(Math.random() * max);
}