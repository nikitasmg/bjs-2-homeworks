function cachingDecoratorNew(func) {
    let cache = [];
    return function wrapper(...args) {
        const key = args.join(',');
        const idx = cache.findIndex(el => el.key === key);
        if (idx !== -1) {
            console.log(`Из кэша: ${cache[idx].value}`);
            return "Из кэша: " + cache[idx].value;
        } else if (cache.length <= 5) {
            let result = func(...args);
            cache.push({
                key: key,
                value: result,
            });
            console.log(`Вычисляем: ${result}`);
            return "Вычисляем: " + result;
        } else {
            cache.shift();
        }
    }
}


function debounceDecoratorNew(func, delay) {
    let flag = false,
        timer;

    return function wrapper(...args) {

        if (flag) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                flag = false;
            }, delay);
            return;
        }

        func(...args);
        flag = true;
    }

}

function debounceDecorator2(func, ms) {
    let flag = false,
        timer;

    function wrapper(...args) {
        wrapper.count.push(args);

        if (flag) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                flag = false;
            }, ms);
            return;
        }

        func(...args);
        flag = true;
    }
    wrapper.count = [];
    return wrapper;
}