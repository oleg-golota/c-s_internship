/* eslint-disable */
const zooGoods = { name: 'Зоотовари', children: [
  { name: 'Собаки', children: [{name: 'Корм'}, {name: 'Іграшки'}, {name: 'Догляд та гігієна'}, {name: 'Ветпрепарати'}, {name: 'Одяг'}, {name: 'Нашийники'}, {name: 'Намордники'}] },
  { name: 'Коти', children: [{name: 'Корм'}, {name: 'Туалети'}, {name: 'Наповнювачі туалетів'}, {name: 'Іграшки'}, {name: 'Догляд та гігієна'}, {name: 'Ветпрепарати'}] },
  { name: 'Тваринництво' } 
] };
const fashionGoods = { name: 'Одяг, взуття, аксесуари', children: [
  { name: 'Жінки', children: [
    {name: 'Одяг'}, 
    {name: 'Взуття', children: [
      {name: 'Туфлі, балетки', children: [{name: 'Туфлі'}, {name: 'Лофери'}, {name: 'Балетки'}, {name: 'Дербі'}, {name: 'Оксфорди'}, {name: 'Броги'}, {name: 'Монки'}]},
      {name: 'Кросівки і кеди'},                  {name: 'Черевики, ботильйони'}, {name: 'Чоботи, уггі'}, {name: 'Кімнатні тапочки'}, {name: 'Вʼєтнамки'}, {name: 'Босоніжки, сандалі'}, {name: 'Сліпони, еспадрильї'}, {name: 'Мокасини, топсайдери'}]}, 
    {name: 'Сумки та аксесуари'},               
    {name: 'Ювелірні прикраси'}] },
  { name: 'Чоловіки', children: [
    {name: 'Одяг', children: [
      {name: 'Верхній одяг', children: [
        {name: 'Куртки', children: [{name: 'Міжсезонні куртки'}, {name: 'Зимові куртки'}, {name: 'Пуховики'}, {name: 'Вітровки'}, {name: 'Парки'}, {name: 'Бомбери'}, {name: 'Шкіряні куртки'}, {name: 'Джинсові куртки'}]}, 
        {name: 'Жилети'},                           {name: 'Пальта'}, {name: 'Плащі'}, {name: 'Дублянки'}, {name: 'Лижні костюми та штани'}]}, 
      {name: 'Кофти, светри, кардигани'},         {name: 'Спортивний одяг'}, {name: 'Сорочки, футболки та майки'}, {name: 'Джинси, штани'}, {name: 'Спідня білизна'}, {name: 'Шкарпетки'}, {name: 'Шорти та плавки'}, {name: 'Костюми та піджаки'}] }, 
    {name: 'Взуття'},                           {name: 'Сумки та аксесуари'}, {name: 'Ювелірні прикраси'}] },
  { name: 'Діти' } 
] };
const computerGoods = {name: 'Компʼютерна техніка', children: [
  {name: 'Ноутбуки'}, {name: 'Компʼютери та моноблоки'}, {name: 'Планшети'}, {name: 'Монітори'}, {name: 'Ігрові пристрої'}, 
  {name: 'Комплектуючі'/*, children: [......]*/}, {name: 'Мережеве обладнання'}, {name: 'Серверне обладнання'}, {name: 'Офісна техніка'}, {name: 'Програмне забезпечення'}, {name: 'Аксесуари'/*, children: [.....]*/ }
] };

const product1 = {
  name: 'Arden Grange Adult Dog Sensitive (with ocean white fish and potato) - Арден Гранж корм для взрослых собак с деликатным желудком и/или чувствительной кожей (сухой корм с океанической белой рыбой и картофелем)',
  brand: 'Arden Grange',
  samples: [
    {stockCode: 'AG000638', variationPropValue: '2кг', price: 429, amountInStock: 5, index: 0},
    {stockCode: 'AG000622', variationPropValue: '6кг', price: 1227, amountInStock: 2, index: 1},
    {stockCode: 'AG000629', variationPropValue: '12кг', price: 2172, amountInStock: 3, index: 2}
  ],
  samplesVariationProp: 'Вага упаковки',
  features: [{key: 'Країна виробник', value: 'Англія', searchable: true, index: 0}],
  description: {description: 'contents long details'},
  rating: 0, reviewCounter: 0, purchaseCounter: 359, 
  categories: [zooGoods.children[0].children[0]]
};

const product2 = {
  name: 'Шампунь дерматологічний ДУКСО КАЛМ (DUXO® CALM) - шампунь Сева для собак та котів для усунення свербежу та запалення, викликаних алергією. Для чутливої шкіри. НОВА ПОКРАЩЕНА ФОРМУЛА! 200 мл',
  brand: 'Ceva',
  samples: [ {stockCode: 'CV000016', variationPropValue: '', price: 388, amountInStock: 10, index: 0} ],
  samplesVariationProp: '',
  features: [
    {key: 'Країна виробник', value: 'Франція', searchable: true, index: 0},
    {key: 'Обʼєм', value: '200мл', searchable: true, index: 1},
    {key: 'Призначення', value: 'Лікувально-відновлюючий', searchable: false, index: 2},
    {key: 'Призначення', value: 'Протиалергічна дія', searchable: false, index: 3}
  ],
  description: {description: 'contents long details'},
  rating: 0, reviewCounter: 0, purchaseCounter: 143,
  categories: [zooGoods.children[0].children[0], zooGoods.children[0].children[1]]
};

const product3 = {
  name: 'Оксфорды Rivadi 2120 Черный лак',
  brand: 'Rivadi',
  samples: [ 
    {stockCode: 'BC002516', variationPropValue: '36', price: 1800, amountInStock: 2, index: 0},
    {stockCode: 'BC002517', variationPropValue: '37', price: 1800, amountInStock: 0, index: 1},
    {stockCode: 'BC002518', variationPropValue: '38', price: 1800, amountInStock: 0, index: 2} 
  ],
  samplesVariationProp: 'Розмір',
  features: [
    {key: 'Країна виробник', value: 'Туреччина', searchable: true, index: 0},
    {key: 'Колір', value: 'Чорний', searchable: true, index: 1},
    {key: 'Матеріал верху', value: 'Лакова шкіра', searchable: true, index: 2},
    {key: 'Матеріал підошви', value: 'Термогума', searchable: true, index: 3},
    {key: 'Матеріал підкладки', value: 'Шеврет', searchable: true, index: 4}
  ],
  rating: 0, reviewCounter: 0, purchaseCounter: 82,
  categories: [fashionGoods.children[0].children[1].children[0].children[4]]
};

exports.categories = [zooGoods, fashionGoods, computerGoods];
exports.products = [product1, product2, product3];