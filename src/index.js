module.exports = function getZerosCount(number, base) {
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 2; i <= base; i++) {
        if (base % i === 0) {
            let cnt_k1 = 0;
            while (base % i === 0) {
                cnt_k1++;
                base = Math.floor(base/i);
            }
            let cnt_k2 = 0;
            let t = number;
            while (t / i > 0) {
                cnt_k2 += Math.floor(t / i);
                t = Math.floor(t/i);
            }
            result = Math.min(result, Math.floor(cnt_k2/cnt_k1));
        }
    }
    return result;
};