function cachingDecoratorNew(func) {
    let cache = [];
    return function wrapper(...args) {
        const key = args.join(',');
        const idx = cache.findIndex(el => el.key === key);
        if (idx !== -1) {
            console.log(`Из кэша: ${cache[idx].value}`);
            return "Из кэша: " + cache[idx].value;
        }

        if (cache.length >= 5) {
            cache.shift();
        }

        let result = func(...args);
        cache.push({
            key: key,
            value: result,
        });
        console.log(`Вычисляем: ${result}`);
        return "Вычисляем: " + result;
    }

}


function debounceDecoratorNew(func, ms) {
    let flag = false,
        timer;

    return function wrapper(...args) {

        if (!flag) {
            func(...args);
            flag = true;
            console.log('Сработал синхронный вызов');
            return;
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            flag = false;
            func(...args);
            console.log('Сработал асинхронный вызов')
        }, ms);

    }
}

function debounceDecorator2(func, ms) {
    let flag = false,
        timer;

    function wrapper(...args) {
        wrapper.count++;
        if (!flag) {
            func(...args);
            flag = true;
            console.log('Сработал синхронный вызов');
            return;
        }

        clearTimeout(timer);
        timer = setTimeout(() => {
            flag = false;
            func(...args);
            console.log('Сработал асинхронный вызов')
        }, ms);

    }
    wrapper.count = 0;
    return wrapper;
}