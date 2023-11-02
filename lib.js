function avg(numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s / numbers.length;
}
function prime(num) {
    let is_prime = true;
    if (num <= 1) {
        is_prime = false;
    }
    else {
        let sqrt_num = Math.sqrt(num);
        for (let i = 2; i <= sqrt_num; i++) {
            if (num % i == 0) {
                is_prime = false;
                break;
            }
        }
    }

    return is_prime;
}
function fact(num) {
    let ft_num = 1;
    for (let i = 1; i <= num; i++) {
        ft_num = ft_num * i;
    }
    return ft_num;
}

module.exports = {
    avg,
    prime,
    fact
}