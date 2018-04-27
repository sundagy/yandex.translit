// Based on this code: http://ajaxs.ru/lesson/js/137-transliteracija_stroki_na_javascript.html

// Символ, на который будут заменяться все спецсимволы
var space = '-';
// Массив для транслитерации
var table = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh',
    'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
    'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space, 'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya',
    ' ': space, '_': space, '`': space, '~': space, '!': space, '@': space,
    '#': space, '$': space, '%': space, '^': space, '&': space, '*': space,
    '(': space, ')': space,'-': space, '\=': space, '+': space, '[': space,
    ']': space, '\\': space, '|': space, '/': space,'.': space, ',': space,
    '{': space, '}': space, '\'': space, '"': space, ';': space, ':': space,
    '?': space, '<': space, '>': space, '№':space
};

module.exports = function (text) {
    var result = '';
    var curent_sim = '';

    text = text.toLowerCase();

    for (i = 0; i < text.length; i++) {
        // Если символ найден в массиве то меняем его
        if(table[text[i]] != undefined) {
            if(curent_sim != table[text[i]] || curent_sim != space){
                result += table[text[i]];
                curent_sim = table[text[i]];
            }
        }
        // Если нет, то оставляем так как есть
        else {
            result += text[i];
            curent_sim = text[i];
        }
    }

    result = result.replace(/^-/, '').replace(/-$/, '');

    return result;
}