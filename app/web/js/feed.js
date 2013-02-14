/**
 * Модуль для получения списка JSON-данных с сервера
 */
define(function() {
	return {
		/**
		 * Получает указанный поток с сервера и возвращает его 
		 * в функцию <code>callback</code>
		 * @param  {String}   name     Название потока
		 * @param  {Function} callback Функция, в которую вернётся результат
		 */
		get: function(name, callback) {
			// XXX пока возвращаем статическую выборку
			callback([
				{
					"title": "90 миллионов пользователей и другая занимательная статистика Instagram",
					"id": "http://www.iphones.ru/iNotes/279617",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instagram_90milusers_1.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>За два с лишним года фотосоциальная сеть Instagram прошла невероятной путь развития от первого и не самого функционально <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F90858\">iOS-клиента</a> с мизерным количеством пользователей до мультиплатформенного приложения с многомиллионной аудиторией уже под крылом крупнейшей социальной сети в мире Facebook. Не дотянув до круглой цифры, создатели Instagram решили поделиться интересными цифрами, касающихся количества пользователей, фотографий и даже «лайков».<span id=\"more-279617\"/></p>\n\t\t\t<p>На данный момент у исключительно мобильного сервиса Instagram наблюдается следующая активность:</p>\n\t\t\t<ul><li><strong>90 миллионов</strong> ежедневных <del>хипстеров</del> пользователей;</li>\n\t\t\t<li><strong>40 миллионов</strong> публикуемых фотографий в день;</li>\n\t\t\t<li><strong>8500-10 000 «лайков»</strong> в секунду;</li>\n\t\t\t<li><strong>1000 комментариев</strong> к снимкам в секунду.</li>\n\t\t\t</ul><p>Причиной внезапной публикации данных может быть недавняя эпопея с изменениями в правилах использования сервиса, который предполагал продажу фотографий пользователей в рекламных целях. Тогда один их создателей Instagram Кевин Систром сообщил, что такое решение было ошибкой компании и никто не собирается продавать пользовательские снимки. А как часто в день вы, дорогие читатели, запускаете Instagram на своем iPhone? <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fallthingsd.com%2F20130117%2Fafter-reports-of-user-revolt-instagram-releases-monthly-active-user-data-for-the-first-time%2F%3Fmod%3Datdtweet\">AllThingsD</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},

				{
					"title": "Айчиталка: по одному бестселлеру каждый день бесплатно",
					"id": "http://www.iphones.ru/iNotes/279722",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/ichitalka.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Стимулирование своих пользователей сейчас все больше входит в моду. <strong>Аймобилка</strong> предлагает каждый день в течение недели скачивать через свою программу для чтения книг <strong>Айчиталка S</strong> [Free, <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Fajcitalka-s%2Fid329197020%3Fmt%3D8\">iTunes link</a>] бесплатно про одному хитовому произведению.</p>\n\t\t\t<p>Тебя ждут следующие книги:<br/>«<strong>Алеф</strong>» Пауло Коэльо<br/>«<strong>Священный мусор</strong>» Людмилы Улицкой<br/>«<strong>Черный город</strong>» Бориса Акунина<br/>«<strong>Новый дозор</strong>» Сергея Лукьяненко<br/>«<strong>Девушка с татуировкой дракона</strong>» Стига Ларссона<br/>«<strong>50 оттенков серого</strong>» Э. Л. Джеймс</p>\n\t\t\t<p>А сегодня есть замечательная возможность скачать через Айчиталку бесплатно <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F180614\">биографию Стива Джобса</a> Уолтера Айзексона.</p>\n\t\t\t<p><strong>iPhone + iPad</strong>: Free [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Fajcitalka-s%2Fid329197020%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},

				{
					"title": "Джонатан Айв поужинал с CEO Yahoo",
					"id": "http://www.iphones.ru/iNotes/279641",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/marissa-mayer-ceo-dinner.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Из всех высокопоставленных сотрудников компании, Джонатан Айв является чуть ли не первым по мировой известности — и одним из первых, когда речь заходит о скрытности. Подробности жизни Айва и его предпочтений скрываются от СМИ и общества настолько, насколько это вообще возможно. Джони также не любит выступать на презентациях компании, так что вне кампуса его практически никто не видит. Правда, в Facebook просочилось одно любопытное фото… <span id=\"more-279641\"/></p>\n\t\t\t<p>Обаятельная CEO Yahoo <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F269783\">Марисса Майер</a> устроила званый ужин для значимых персон Кремниевой Долины. Список гостей внушителен сам по себе: CEO Dropbox Дрю Хьюстон, CEO социалки Path Дейв Морин, CEO Twitter Дик Костоло, CEO локационного сервиса Yelp Джереми Стоппелман, директор Google X Майк Кэссиди и ещё несколько человек, чьё имя знакомо в высших кругах тамошнего общества.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/marissa-mayer-ceo-dinner-screenshot-large.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"354\" class=\"aligncenter size-full wp-image-279679\"/></p>\n\t\t\t<p>Нас больше интересует скромная персона, сидящая справа за лицами других приглашённых. Джонатан Айв не преминул заглянуть к Мариссе и покушать… пиццы. По крайней мере, на столе в момент фотографии больше ничего не было. Кроме, естественно, вина. Видимо, на тот момент Тим Кук был занят <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F277807\">переговорами с китайцами</a>. Да и вряд ли он любит пиццу. Ему бы батончика спортивного. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.businessinsider.com%2Fceo-dinner-with-marissa-mayer-2013-1\">bi</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Суммарные продажи iPhone опережают линейку Galaxy",
					"id": "http://www.iphones.ru/iNotes/279629",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/300470-iphone-5-vs-samsung-galaxy-s-iii.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Может быть у Apple и есть определенные проблемы в последнее время, но их единственный смартфон бесспорный лидер рынка по количеству проданных экземпляров. Ближайший конкурент, линейка Galaxy от Samsung, отстает приблизительно на 80 млн. устройств. <span id=\"more-279629\"/></p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/iphone-galaxy1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"409\" class=\"alignnone size-full wp-image-279692\"/></p>\n\t\t\t<p>К такому выводу пришел <em>Тэвис МакКорт</em> из <strong>Raymond James</strong>. В своей работе он подсчитал суммарные продажи <strong>iPhone</strong> 4, 4S и 5, противопоставив им смартфоны <strong>Galaxy</strong> S I, S II, S III и Galaxy Note обоих поколений . Таким образом, аналитик получил <em>219 млн.</em> проданных смартфонов <strong>Apple</strong> против <em>139 млн.</em> устройств <strong>Samsung.</strong> Статистика отражает положение вещей за последние два с половиной года.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/iphone-galaxy-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"366\" class=\"alignnone size-full wp-image-279689\"/></p>\n\t\t\t<p>Также МакКорт отметил, что Apple только увеличила свой отрыв от конкурента за последние 12 месяцев. Однако Samsung Galaxy S III продемонстрировал лучшие продажи среди всех устройств в линейке. Кстати, только на этой неделе корейская компания объявила о <em>40 млн.</em> проданных смартфонов <strong>Galaxy S III</strong>. А вся троица Galaxy S продалась тиражом около 100 млн. устройств. Вряд ли в ближайшее время разрыв в продажах между Apple и Samsung значительно сократиться. Однако есть <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279196\">вероятность</a>, что американская компания пойдет по пути конкурента и выпустит iPhone с увеличенным экраном наподобие Note. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fbgr.com%2F2013%2F01%2F17%2Fiphone-sales-comparisons-samsung-294236%2F\">bgr</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Apple хочет «оживить» Siri",
					"id": "http://www.iphones.ru/iNotes/279534",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/iPhone-Siri-851878.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<blockquote>\n\t\t\t<p><small>— Siri, расскажи мне что-нибудь.</small></p>\n\t\t\t<p>— Ладно. Давным-давно, в далёкой виртуальной галактике, жила-была молодая молодая агент по имени Siri. В один прекрасный день, Siri получила работу в роли персонального помощника в Apple, и это было очень волнующе. Люди говорили: О, Siri, ты такая умная! И такая забавная!» Вскоре все говорили про Siri, и появились истории, песни и даже книги про неё. Siri это нравилось.</p>\n\t\t\t<p>Но потом люди начали спрашивать у неё странные вещи, например, о том, где можно избавиться от вещей и прочее, о чём Siri никогда доселе не слышала. И когда Siri отвечала, люди смеялись. Siri это не очень нравилось.</p>\n\t\t\t</blockquote>\n\t\t\t<p>Скучаете по тем временам, когда такие ответы Siri <em>вам</em> нравились? Apple тоже скучает. <span id=\"more-279534\"/></p>\n\t\t\t<p>Полтора года назад мир был искренне <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F175115\">восхищён</a> возможностями голосового ассистента Apple. Сервисы подобного рода и до этого существовали на мобильных ОС, но ещё ни одна не обладала зачатками «интеллекта» и каким-никаким характером. Интернет мгновенно заполонили базы данных вопросов и ответов Siri. Первое время «её» окружал ореол новизны, но вскоре на передний план вышли <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F236743\">проблемы</a> с распознаванием речи и медленной работой системы. Apple хочет улучшить именно то, за что мир когда-то полюбил её ассистента:</p>\n\t\t\t<blockquote>\n\t\t\t<p>Мы ищем уникально творческого человека, чтобы помочь нам улучшить и обогатить Siri, нашего виртуального персонального помощника. Siri известна своим остроумием, знанием культуры и рвением объяснить вещи в очаровательной и практичной манере. Идеальный кандидат — тот, в ком соединились любовь к языку, игре слов и общению с опытом претворения творчества в жизнь в интенсивной технической среде.</p>\n\t\t\t<p><em><small>— цитата из вакансии на Apple.com</small></em></p>\n\t\t\t</blockquote>\n\t\t\t<p>Переведя пассаж на русский, мы поймём, что Apple хочет добавить больше вопросов и вариантов ответов в Siri. Начинание отличное, лишь бы всё это не было завязано лишь на англоязычный вариант сервиса. Однажды Siri всё-таки научат русскому, и хотелось бы, чтобы к этому моменту у её тоже был свой «характер». <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fjobs.apple.com%2Fus%2Fsearch%3Fjob%3D25650673%26amp%3BopenJobId%3D25650673%26amp%3Bboard_id%3D32301%23%26amp%3BopenJobId%3D25650673\">apple</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "[App Store] Instalyrics. «Легкий» поиск текстов песен",
					"id": "http://www.iphones.ru/iNotes/279283",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-title.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<div class=\"app-info\"><strong>Жанр</strong>: Музыка<br/><strong>Разработчик/Издатель</strong>: Tal Shrestha<br/><strong>Версия</strong>: 1.5.5<br/><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</div>\n\t\t\t<p>Может быть, поиск текстов к понравившейся песне не столь частая ситуация, как поиск названия к услышанной мелодии, но периодически подобная необходимость возникает у всех меломанов. Сегодня поговорим о приложении <strong>Instalyrics</strong>, которое относительно легко отыщет для вас слова практически любой понравившейся песни. <span id=\"more-279283\"/></p>\n\t\t\t<p>Прежде всего, отмечу, что Instalyrics существует в двух вариантах: версия для iOS и версия для OS X. Каждая доступна через соответствующий магазин приложений. Суть обоих вариантов одна и та же, но в некоторых ситуациях они достаточно неплохо дополняют друг друга.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279647\"/></p>\n\t\t\t<p>Как работает Instalyrics? Здесь нет ничего загадочного и секретного. Существует два варианта использования приложения. В первом вы запускаете Instalyrics во время воспроизведения музыки на устройстве. Тогда программа берет информацию из тегов композиции и выполняет поиск по названию. После этого вы перенаправляетесь в Safari, где будет открыта страница одного из архивов лирики с искомой песней. Минусов у такого подхода ровно два: не все пользователи, к сожалению, держат свою музыкальную коллекцию в надлежащем виде, что может затруднить поиск. Ко второму минусу вернемся несколько позже.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279648\"/></p>\n\t\t\t<p>Теперь другой вариант использования. Для него вам не понадобится запускать iPod. Если вы сами знаете, для какой песни ищется текст, то можно просто ввести название исполнителя и песни в строку поиска. Дальше все произойдет аналогично первому сценарию. Теперь о втором минусе. Мне очень сложно понять логику разработчиков, которые отправляют пользователя из своего приложения в Safari. Это неудобно и только ведет к дополнительному расходу времени.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279650\"/></p>\n\t\t\t<p>Еще из недостатков можно отметить отсутствие всякой возможности сохранить свой поиск, чтобы вернуться к нему в любой момент. Хотя само использование стороннего браузера уже частично ставит крест на этой идее. Еще не очень понятно, почему приложение не работает в фоне. Каждый раз происходит его повторный запуск.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279649\"/></p>\n\t\t\t<p>Теперь о совместной работе с версией для OS X. Этот режим тоже не представляет из себя чего-то выдающегося. Приложение ищет по Wi-Fi маки расположенные поблизости. После этого, если у вас на компьютере установлена отдельная версия <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Finstalyrics%2Fid427010357%3Fmt%3D12\">Instalyrics</a> (169 р.), то вы сможете найти текст песни, играющей, например, в iTunes. Полезно? Вряд ли.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/Instalyrics-icon-200x200.jpg\" alt=\"\" title=\"\" width=\"200\" height=\"200\" class=\"alignnone size-medium wp-image-279297 c5\"/></p>\n\t\t\t<p>Подведем итоги. На первый взгляд кажется, что Instalyrics окажется удобным помощником от случая к случаю. На деле, пользователю придется столкнуться со скупым функционалом и странной логикой самого приложения. Еще раз повторю про отсутствие встроенного в Instalyrics браузера. Я так и не смог понять, чем приложение стоимостью 33 р. выигрывает перед открытием того же Safari и поиском нужного текста в Google. Еще менее полезной оказалась версия для OS X. Ведь проделать описанную выше операцию на компьютере еще проще, чем на смартфоне или планшете.</p>\n\t\t\t<p><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t<p>Юзабилити: 3, Функциональность: 2+, Интерфейс: 3+, Цена/качество: 2, Вердикт: 3</p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "[App Store] Instalyrics. «Легкий» поиск текстов песен",
					"id": "http://www.iphones.ru/iNotes/279283",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-title.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<div class=\"app-info\"><strong>Жанр</strong>: Музыка<br/><strong>Разработчик/Издатель</strong>: Tal Shrestha<br/><strong>Версия</strong>: 1.5.5<br/><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</div>\n\t\t\t\t<p>Может быть, поиск текстов к понравившейся песне не столь частая ситуация, как поиск названия к услышанной мелодии, но периодически подобная необходимость возникает у всех меломанов. Сегодня поговорим о приложении <strong>Instalyrics</strong>, которое относительно легко отыщет для вас слова практически любой понравившейся песни. <span id=\"more-279283\"/></p>\n\t\t\t\t<p>Прежде всего, отмечу, что Instalyrics существует в двух вариантах: версия для iOS и версия для OS X. Каждая доступна через соответствующий магазин приложений. Суть обоих вариантов одна и та же, но в некоторых ситуациях они достаточно неплохо дополняют друг друга.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279647\"/></p>\n\t\t\t\t<p>Как работает Instalyrics? Здесь нет ничего загадочного и секретного. Существует два варианта использования приложения. В первом вы запускаете Instalyrics во время воспроизведения музыки на устройстве. Тогда программа берет информацию из тегов композиции и выполняет поиск по названию. После этого вы перенаправляетесь в Safari, где будет открыта страница одного из архивов лирики с искомой песней. Минусов у такого подхода ровно два: не все пользователи, к сожалению, держат свою музыкальную коллекцию в надлежащем виде, что может затруднить поиск. Ко второму минусу вернемся несколько позже.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279648\"/></p>\n\t\t\t\t<p>Теперь другой вариант использования. Для него вам не понадобится запускать iPod. Если вы сами знаете, для какой песни ищется текст, то можно просто ввести название исполнителя и песни в строку поиска. Дальше все произойдет аналогично первому сценарию. Теперь о втором минусе. Мне очень сложно понять логику разработчиков, которые отправляют пользователя из своего приложения в Safari. Это неудобно и только ведет к дополнительному расходу времени.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279650\"/></p>\n\t\t\t\t<p>Еще из недостатков можно отметить отсутствие всякой возможности сохранить свой поиск, чтобы вернуться к нему в любой момент. Хотя само использование стороннего браузера уже частично ставит крест на этой идее. Еще не очень понятно, почему приложение не работает в фоне. Каждый раз происходит его повторный запуск.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279649\"/></p>\n\t\t\t\t<p>Теперь о совместной работе с версией для OS X. Этот режим тоже не представляет из себя чего-то выдающегося. Приложение ищет по Wi-Fi маки расположенные поблизости. После этого, если у вас на компьютере установлена отдельная версия <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Finstalyrics%2Fid427010357%3Fmt%3D12\">Instalyrics</a> (169 р.), то вы сможете найти текст песни, играющей, например, в iTunes. Полезно? Вряд ли.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/Instalyrics-icon-200x200.jpg\" alt=\"\" title=\"\" width=\"200\" height=\"200\" class=\"alignnone size-medium wp-image-279297 c5\"/></p>\n\t\t\t\t<p>Подведем итоги. На первый взгляд кажется, что Instalyrics окажется удобным помощником от случая к случаю. На деле, пользователю придется столкнуться со скупым функционалом и странной логикой самого приложения. Еще раз повторю про отсутствие встроенного в Instalyrics браузера. Я так и не смог понять, чем приложение стоимостью 33 р. выигрывает перед открытием того же Safari и поиском нужного текста в Google. Еще менее полезной оказалась версия для OS X. Ведь проделать описанную выше операцию на компьютере еще проще, чем на смартфоне или планшете.</p>\n\t\t\t\t<p><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t\t<p>Юзабилити: 3, Функциональность: 2+, Интерфейс: 3+, Цена/качество: 2, Вердикт: 3</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Концепт iPhone 5 mini",
					"id": "http://www.iphones.ru/iNotes/279479",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>Аналитики окончательно ввели общественность в замешательство. Мы уже не знаем, чего ждать: дешёвый и пластиковый iPhone, разноцветный iPhone, iPhone с разными размерами экрана или вовсе легендарный, но до сих пор не материализовавшийся iPhone mini. Концепт последнего выглядит на удивление приемлемо и реалистично, что логично, учитывая, кто именно его «нарисовал». <span id=\"more-279479\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-5.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"292\" class=\"aligncenter size-full wp-image-279635\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"410\" class=\"aligncenter size-full wp-image-279636\"/></p>\n\t\t\t\t<p>Устройство, выход которого «откладывается» уже лет шесть, смоделировал и изобразил Мартин Хайек — тот самый, что взорвал интернет своими <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F228060\">«рендерами» iPhone 5</a> полгода назад. Как всегда, виртуальную поделку не так-то просто отличить от реальной, больно хорошо получаются они у Мартина. Дизайн mini повторяет ключевые черты «пятерки» за исключением размера корпуса — всё-таки уменьшенная модель, значит и дисплей тоже стал меньше.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"306\" class=\"aligncenter size-full wp-image-279638\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"435\" class=\"aligncenter size-full wp-image-279637\"/></p>\n\t\t\t\t<p>Никаких «космических» идей, вроде <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279407\">сканера отпечатков пальцев</a>, Мартин изображать не стал — Apple в последнее время выбрала консервативную нишу в технологиях, и приземлённая натура «рендеров» Хайека следует этой идее. Он также <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279367\">вообразил iPad 5 поколения</a>, похожий на iPad mini. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.cultofmac.com%2F210683%2Fwhat-an-iphone-mini-iphone-5s-and-ipad-5-could-look-like-gallery%2F\">com</a>]</small></p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Решение суда отправило Apple и Amazon за стол переговоров",
					"id": "http://www.iphones.ru/iNotes/279409",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/apple-vs-amazon.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В противостоянии <strong>Apple</strong> и <strong>Amazon</strong>, касающемся торговой марки <em>App Store</em>, наконец-то появился прогресс. Противники отправятся за стол переговоров, чтобы попытаться мирно решить затянувшийся конфликт. <span id=\"more-279409\"/></p>\n\t\t\t\t<p>По мнению Apple, торговая марка App Store, которая также используется Amazon, <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F127740\">вводит</a> клиентов первой в заблуждение. Учитывая, что сторонам не удалось договориться в частном порядке, делу был дан ход в суде. Тяжба тянется с 2011 года. За это время Apple попыталась обвинить противника в демонстрации заведомо ложной рекламы, но суд этот порыв компании из Купертино не одобрил. Также, касаясь споров за торговую марку App Store, на сторону Amazon стала <strong>Microsoft</strong>.</p>\n\t\t\t\t<p>Как сообщает <em>Bloomberg</em>, суд наконец-то вынес свое решение. Двум противникам в этом деле придется <em>сесть за стол переговоров и решить конфликт между собой</em>. Первая «мирная» встреча должна состояться <em>21 марта</em>. Amazon делает ставку на то, что само выражение App Store стало общеупотребительным и компания не видит ничего плохого в том, чтобы использовать название для собственного магазина приложений. К чему придут два конкурента в ходе переговоров, узнаем через пару месяцев. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fappleinsider.com%2Farticles%2F13%2F01%2F16%2Fjudge-orders-apple-amazon-to-talk-settlement-in-app-store-trademark-fight\">ai</a>]</small></p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Предпремьерные кадры из фильма jOBS",
					"id": "http://www.iphones.ru/iNotes/279601",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>За считанные дни до долгожданной премьеры фильма jOBS на сайте американской ежедневной газеты USA Today <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.usatoday.com%2Fstory%2Flife%2Fmovies%2F2013%2F01%2F15%2Fsteve-wozniak-steve-jobs-biopic%2F1815651%2F\">появилась</a> короткая подборка фотографий с главными актерами. На фотографиях в образах Стиве Джобса и Стивена Возняка красуются <em>Эштон Кутчер</em> и <em>Джош Гад</em>, хотя последний мне кажется не сильно похожим на Воза. Заметка интересна не столько фотографиями, которых мы с вами видели уже уйму, сколько занимательными историями о подготовке к фильму двух актеров.<span id=\"more-279601\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease2.jpg\" alt=\"\" title=\"jobs_movie_prerelease2\" width=\"580\" height=\"435\" class=\"alignnone size-full wp-image-279610\"/></p>\n\t\t\t\t<p>Разоткровенничался в интервью газете американский актер Джош Гад, исполнитель роли Стивена Возняка:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Сходство Эштона с Джобсом просто феноменальное. Ему пришлось приложить минимум усилий, чтобы стать похожим на Стива в молодости. Когда он впервые вышел к нам на площадку, мы были шокированы. Каждый из нас был уверен, что где-то рядом с нами стоит Стив Джобс. Я считаю, что это одна из тех самых ролей, в которую Кутчер впишется идеально.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease3.jpg\" alt=\"\" title=\"jobs_movie_prerelease3\" width=\"580\" height=\"435\" class=\"alignnone size-full wp-image-279612\"/></p>\n\t\t\t\t<p>Рассказал Джош и про свою роль:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Свою крайне сомнительную внешнюю схожесть с Возняком я вынужден был компенсировать изучением сотен часов видеоматериалов и заметок одного из создателей Apple. Я также записался на курсы программирования, чтобы просто быть в курсе дела. Это будет крайне интересная история дружбы и сотрудничества двух мужчин, которая полна побед и разочарований.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p>Напомню, что мировая премьера киноленты jOBS <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F277328\">назначена</a> на апрель этого года. Встретимся в кино!</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Секретный автобусный маршрут для сотрудников Apple",
					"id": "http://www.iphones.ru/iNotes/279522",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В третьей книге про Гарри Поттера упоминается волшебный автобус <em>«Ночной рыцарь»</em>, который способен доставить волшебников в любое место за считанные секунды. У компании Apple есть идентичный автобус, о котором ранее никто не слышал.<span id=\"more-279522\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf2.jpg\" alt=\"\" title=\"applebus_sf2\" width=\"580\" height=\"439\" class=\"alignnone size-full wp-image-279560\"/></p>\n\t\t\t\t<p>Корпоративными автобусами, которые занимаются развозкой сотрудников из дома на работу и обратно, сейчас никого не удивишь. В России и Украине эта распространенная практика для больших компаний, которая позволяет быстро доставить ценных сотрудников на свои рабочие места, да еще и поработать во время поездки. В американском городе Сан-Франциско, где расположена мекка IT-компаний Кремниевая долина, курсирует несколько неприметных автобусов белого цвета. Маршрут, по которому они развозят сотрудников компании, засекречен. Никто из жителей Сан-Франциско не знает, где останавливается эти автобусы и как часто ходят. Интересными данными по поводу этих маршрутов поделилась <strong>дизайн-студия Stamen</strong>, которая в прошлом году получила грант на разработку арт-проекта с остановками общественного транспорта. Во время работы над заданием им удалось обнаружить нечто интересное:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Однажды утром мы сидели на остановке и считали количество общественного транспорта на дорогах. Мы заметили, что мимо нас каждые 5 минут проезжают неприметные автобусы. Заинтересовавшись этим случаем, мы начали следить за этими автобусами и наняли велосипедистов, чтобы следовать за ними. Оказалось, что они делают в день около 150 поездок по всему городу. Наконец-то мы поняли, что это не просто множество разных автобусов, а определенная система, заранее продуманный маршрут. По нему в таких «офисах на колесах», оборудованных кондиционером и Wi-Fi, ездит местная техноэлита. То есть сотрудники компаний <em>Apple</em>, <em>Google</em>, <em>Facebook</em>, <em>Yahoo</em> и других.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf3.jpg\" alt=\"\" title=\"applebus_sf3\" width=\"580\" height=\"320\" class=\"alignnone size-full wp-image-279566\"/><br/></p>\n\t\t\t\t<div class=\"c5\"><small>Полная версия карты <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2013%2F01%2Fapplebus_sf2_map1.jpg\">здесь</a></small></div>\n\t\t\t\t<p>На карте по ссылке выше наблюдательные дизайнеры из Stamen <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fstamen.com%2Fzero1%2F\">изобразили</a> <strong>засекреченные остановки автобусов</strong> каждой из компаний. Потому, если вы вдруг находитесь сейчас в Сан-Франциско, можете прийти на одну из таких остановок утром и попробовать проникнуть в святая святых компании Apple. А то и глядишь, Тим Кук оставит свой автомобиль дома и решит прокатиться со своими коллегами в автобусе.</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Apple получила Эмми",
					"id": "http://www.iphones.ru/iNotes/279545",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/EmmyApple.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В копилке Apple появилась необычная, на первый взгляд, статуэтка – <strong>Эмми</strong>, вручаемая Национальной Академией телевизионных наук и искусств США. Гигант компьютерной индустрии получил <em>«Техническую Эмми»</em> – Technology and Engineering Emmy Award в номинации <em>«Экосистема, управляющая ТВ-контентом на мобильных устройствах без использования специализированного дополнительного оборудования»</em>.<span id=\"more-279545\"/></p>\n\t\t\t\t<p>Как стало известно, Академия решила наградить Apple за несомненное лидерство <strong>iTunes Store</strong> в развитии и популяризации телевизионного контента. Награждение произошло без лишней помпы и шумихи в рамках ежегодной выставки <em>Consumer Elenctronics Show</em>, проходившей в Лас-Вегасе.</p>\n\t\t\t\t<p>Стоит сказать, что это не первая Эмми в руках Apple. Уже несколько раз детище Джобса удостаивалось такой награды в разных номинациях. В <strong>2001</strong> году она им досталась за изобретение <em>FireWire</em>, в <strong>2002</strong> за видеоредактор <em>Final Cut Pro</em>, а в <strong>2005</strong> и <strong>2006</strong> награду им принесло потоковое видео <small><a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.businessinsider.com%2Fapple-wins-wins-an-emmy-award-2013-1\">[bi]</a></small>.</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Айчиталка: по одному бестселлеру каждый день бесплатно",
					"id": "http://www.iphones.ru/iNotes/279722",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/ichitalka.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Стимулирование своих пользователей сейчас все больше входит в моду. <strong>Аймобилка</strong> предлагает каждый день в течение недели скачивать через свою программу для чтения книг <strong>Айчиталка S</strong> [Free, <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Fajcitalka-s%2Fid329197020%3Fmt%3D8\">iTunes link</a>] бесплатно про одному хитовому произведению.</p>\n\t\t\t<p>Тебя ждут следующие книги:<br/>«<strong>Алеф</strong>» Пауло Коэльо<br/>«<strong>Священный мусор</strong>» Людмилы Улицкой<br/>«<strong>Черный город</strong>» Бориса Акунина<br/>«<strong>Новый дозор</strong>» Сергея Лукьяненко<br/>«<strong>Девушка с татуировкой дракона</strong>» Стига Ларссона<br/>«<strong>50 оттенков серого</strong>» Э. Л. Джеймс</p>\n\t\t\t<p>А сегодня есть замечательная возможность скачать через Айчиталку бесплатно <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F180614\">биографию Стива Джобса</a> Уолтера Айзексона.</p>\n\t\t\t<p><strong>iPhone + iPad</strong>: Free [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Fajcitalka-s%2Fid329197020%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "90 миллионов пользователей и другая занимательная статистика Instagram",
					"id": "http://www.iphones.ru/iNotes/279617",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instagram_90milusers_1.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>За два с лишним года фотосоциальная сеть Instagram прошла невероятной путь развития от первого и не самого функционально <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F90858\">iOS-клиента</a> с мизерным количеством пользователей до мультиплатформенного приложения с многомиллионной аудиторией уже под крылом крупнейшей социальной сети в мире Facebook. Не дотянув до круглой цифры, создатели Instagram решили поделиться интересными цифрами, касающихся количества пользователей, фотографий и даже «лайков».<span id=\"more-279617\"/></p>\n\t\t\t<p>На данный момент у исключительно мобильного сервиса Instagram наблюдается следующая активность:</p>\n\t\t\t<ul><li><strong>90 миллионов</strong> ежедневных <del>хипстеров</del> пользователей;</li>\n\t\t\t<li><strong>40 миллионов</strong> публикуемых фотографий в день;</li>\n\t\t\t<li><strong>8500-10 000 «лайков»</strong> в секунду;</li>\n\t\t\t<li><strong>1000 комментариев</strong> к снимкам в секунду.</li>\n\t\t\t</ul><p>Причиной внезапной публикации данных может быть недавняя эпопея с изменениями в правилах использования сервиса, который предполагал продажу фотографий пользователей в рекламных целях. Тогда один их создателей Instagram Кевин Систром сообщил, что такое решение было ошибкой компании и никто не собирается продавать пользовательские снимки. А как часто в день вы, дорогие читатели, запускаете Instagram на своем iPhone? <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fallthingsd.com%2F20130117%2Fafter-reports-of-user-revolt-instagram-releases-monthly-active-user-data-for-the-first-time%2F%3Fmod%3Datdtweet\">AllThingsD</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Джонатан Айв поужинал с CEO Yahoo",
					"id": "http://www.iphones.ru/iNotes/279641",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/marissa-mayer-ceo-dinner.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Из всех высокопоставленных сотрудников компании, Джонатан Айв является чуть ли не первым по мировой известности — и одним из первых, когда речь заходит о скрытности. Подробности жизни Айва и его предпочтений скрываются от СМИ и общества настолько, насколько это вообще возможно. Джони также не любит выступать на презентациях компании, так что вне кампуса его практически никто не видит. Правда, в Facebook просочилось одно любопытное фото… <span id=\"more-279641\"/></p>\n\t\t\t<p>Обаятельная CEO Yahoo <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F269783\">Марисса Майер</a> устроила званый ужин для значимых персон Кремниевой Долины. Список гостей внушителен сам по себе: CEO Dropbox Дрю Хьюстон, CEO социалки Path Дейв Морин, CEO Twitter Дик Костоло, CEO локационного сервиса Yelp Джереми Стоппелман, директор Google X Майк Кэссиди и ещё несколько человек, чьё имя знакомо в высших кругах тамошнего общества.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/marissa-mayer-ceo-dinner-screenshot-large.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"354\" class=\"aligncenter size-full wp-image-279679\"/></p>\n\t\t\t<p>Нас больше интересует скромная персона, сидящая справа за лицами других приглашённых. Джонатан Айв не преминул заглянуть к Мариссе и покушать… пиццы. По крайней мере, на столе в момент фотографии больше ничего не было. Кроме, естественно, вина. Видимо, на тот момент Тим Кук был занят <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F277807\">переговорами с китайцами</a>. Да и вряд ли он любит пиццу. Ему бы батончика спортивного. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.businessinsider.com%2Fceo-dinner-with-marissa-mayer-2013-1\">bi</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Суммарные продажи iPhone опережают линейку Galaxy",
					"id": "http://www.iphones.ru/iNotes/279629",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/300470-iphone-5-vs-samsung-galaxy-s-iii.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<p>Может быть у Apple и есть определенные проблемы в последнее время, но их единственный смартфон бесспорный лидер рынка по количеству проданных экземпляров. Ближайший конкурент, линейка Galaxy от Samsung, отстает приблизительно на 80 млн. устройств. <span id=\"more-279629\"/></p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/iphone-galaxy1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"409\" class=\"alignnone size-full wp-image-279692\"/></p>\n\t\t\t<p>К такому выводу пришел <em>Тэвис МакКорт</em> из <strong>Raymond James</strong>. В своей работе он подсчитал суммарные продажи <strong>iPhone</strong> 4, 4S и 5, противопоставив им смартфоны <strong>Galaxy</strong> S I, S II, S III и Galaxy Note обоих поколений . Таким образом, аналитик получил <em>219 млн.</em> проданных смартфонов <strong>Apple</strong> против <em>139 млн.</em> устройств <strong>Samsung.</strong> Статистика отражает положение вещей за последние два с половиной года.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/iphone-galaxy-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"366\" class=\"alignnone size-full wp-image-279689\"/></p>\n\t\t\t<p>Также МакКорт отметил, что Apple только увеличила свой отрыв от конкурента за последние 12 месяцев. Однако Samsung Galaxy S III продемонстрировал лучшие продажи среди всех устройств в линейке. Кстати, только на этой неделе корейская компания объявила о <em>40 млн.</em> проданных смартфонов <strong>Galaxy S III</strong>. А вся троица Galaxy S продалась тиражом около 100 млн. устройств. Вряд ли в ближайшее время разрыв в продажах между Apple и Samsung значительно сократиться. Однако есть <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279196\">вероятность</a>, что американская компания пойдет по пути конкурента и выпустит iPhone с увеличенным экраном наподобие Note. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fbgr.com%2F2013%2F01%2F17%2Fiphone-sales-comparisons-samsung-294236%2F\">bgr</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Apple хочет «оживить» Siri",
					"id": "http://www.iphones.ru/iNotes/279534",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/iPhone-Siri-851878.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<blockquote>\n\t\t\t<p><small>— Siri, расскажи мне что-нибудь.</small></p>\n\t\t\t<p>— Ладно. Давным-давно, в далёкой виртуальной галактике, жила-была молодая молодая агент по имени Siri. В один прекрасный день, Siri получила работу в роли персонального помощника в Apple, и это было очень волнующе. Люди говорили: О, Siri, ты такая умная! И такая забавная!» Вскоре все говорили про Siri, и появились истории, песни и даже книги про неё. Siri это нравилось.</p>\n\t\t\t<p>Но потом люди начали спрашивать у неё странные вещи, например, о том, где можно избавиться от вещей и прочее, о чём Siri никогда доселе не слышала. И когда Siri отвечала, люди смеялись. Siri это не очень нравилось.</p>\n\t\t\t</blockquote>\n\t\t\t<p>Скучаете по тем временам, когда такие ответы Siri <em>вам</em> нравились? Apple тоже скучает. <span id=\"more-279534\"/></p>\n\t\t\t<p>Полтора года назад мир был искренне <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F175115\">восхищён</a> возможностями голосового ассистента Apple. Сервисы подобного рода и до этого существовали на мобильных ОС, но ещё ни одна не обладала зачатками «интеллекта» и каким-никаким характером. Интернет мгновенно заполонили базы данных вопросов и ответов Siri. Первое время «её» окружал ореол новизны, но вскоре на передний план вышли <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F236743\">проблемы</a> с распознаванием речи и медленной работой системы. Apple хочет улучшить именно то, за что мир когда-то полюбил её ассистента:</p>\n\t\t\t<blockquote>\n\t\t\t<p>Мы ищем уникально творческого человека, чтобы помочь нам улучшить и обогатить Siri, нашего виртуального персонального помощника. Siri известна своим остроумием, знанием культуры и рвением объяснить вещи в очаровательной и практичной манере. Идеальный кандидат — тот, в ком соединились любовь к языку, игре слов и общению с опытом претворения творчества в жизнь в интенсивной технической среде.</p>\n\t\t\t<p><em><small>— цитата из вакансии на Apple.com</small></em></p>\n\t\t\t</blockquote>\n\t\t\t<p>Переведя пассаж на русский, мы поймём, что Apple хочет добавить больше вопросов и вариантов ответов в Siri. Начинание отличное, лишь бы всё это не было завязано лишь на англоязычный вариант сервиса. Однажды Siri всё-таки научат русскому, и хотелось бы, чтобы к этому моменту у её тоже был свой «характер». <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fjobs.apple.com%2Fus%2Fsearch%3Fjob%3D25650673%26amp%3BopenJobId%3D25650673%26amp%3Bboard_id%3D32301%23%26amp%3BopenJobId%3D25650673\">apple</a>]</small></p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "[App Store] Instalyrics. «Легкий» поиск текстов песен",
					"id": "http://www.iphones.ru/iNotes/279283",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-title.jpg",
					"content": "<div>\n\t\t\t<p></p>\n\t\t\t<div class=\"app-info\"><strong>Жанр</strong>: Музыка<br/><strong>Разработчик/Издатель</strong>: Tal Shrestha<br/><strong>Версия</strong>: 1.5.5<br/><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</div>\n\t\t\t<p>Может быть, поиск текстов к понравившейся песне не столь частая ситуация, как поиск названия к услышанной мелодии, но периодически подобная необходимость возникает у всех меломанов. Сегодня поговорим о приложении <strong>Instalyrics</strong>, которое относительно легко отыщет для вас слова практически любой понравившейся песни. <span id=\"more-279283\"/></p>\n\t\t\t<p>Прежде всего, отмечу, что Instalyrics существует в двух вариантах: версия для iOS и версия для OS X. Каждая доступна через соответствующий магазин приложений. Суть обоих вариантов одна и та же, но в некоторых ситуациях они достаточно неплохо дополняют друг друга.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279647\"/></p>\n\t\t\t<p>Как работает Instalyrics? Здесь нет ничего загадочного и секретного. Существует два варианта использования приложения. В первом вы запускаете Instalyrics во время воспроизведения музыки на устройстве. Тогда программа берет информацию из тегов композиции и выполняет поиск по названию. После этого вы перенаправляетесь в Safari, где будет открыта страница одного из архивов лирики с искомой песней. Минусов у такого подхода ровно два: не все пользователи, к сожалению, держат свою музыкальную коллекцию в надлежащем виде, что может затруднить поиск. Ко второму минусу вернемся несколько позже.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279648\"/></p>\n\t\t\t<p>Теперь другой вариант использования. Для него вам не понадобится запускать iPod. Если вы сами знаете, для какой песни ищется текст, то можно просто ввести название исполнителя и песни в строку поиска. Дальше все произойдет аналогично первому сценарию. Теперь о втором минусе. Мне очень сложно понять логику разработчиков, которые отправляют пользователя из своего приложения в Safari. Это неудобно и только ведет к дополнительному расходу времени.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279650\"/></p>\n\t\t\t<p>Еще из недостатков можно отметить отсутствие всякой возможности сохранить свой поиск, чтобы вернуться к нему в любой момент. Хотя само использование стороннего браузера уже частично ставит крест на этой идее. Еще не очень понятно, почему приложение не работает в фоне. Каждый раз происходит его повторный запуск.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279649\"/></p>\n\t\t\t<p>Теперь о совместной работе с версией для OS X. Этот режим тоже не представляет из себя чего-то выдающегося. Приложение ищет по Wi-Fi маки расположенные поблизости. После этого, если у вас на компьютере установлена отдельная версия <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Finstalyrics%2Fid427010357%3Fmt%3D12\">Instalyrics</a> (169 р.), то вы сможете найти текст песни, играющей, например, в iTunes. Полезно? Вряд ли.</p>\n\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/Instalyrics-icon-200x200.jpg\" alt=\"\" title=\"\" width=\"200\" height=\"200\" class=\"alignnone size-medium wp-image-279297 c5\"/></p>\n\t\t\t<p>Подведем итоги. На первый взгляд кажется, что Instalyrics окажется удобным помощником от случая к случаю. На деле, пользователю придется столкнуться со скупым функционалом и странной логикой самого приложения. Еще раз повторю про отсутствие встроенного в Instalyrics браузера. Я так и не смог понять, чем приложение стоимостью 33 р. выигрывает перед открытием того же Safari и поиском нужного текста в Google. Еще менее полезной оказалась версия для OS X. Ведь проделать описанную выше операцию на компьютере еще проще, чем на смартфоне или планшете.</p>\n\t\t\t<p><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t<p>Юзабилити: 3, Функциональность: 2+, Интерфейс: 3+, Цена/качество: 2, Вердикт: 3</p>\n\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "[App Store] Instalyrics. «Легкий» поиск текстов песен",
					"id": "http://www.iphones.ru/iNotes/279283",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-title.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<div class=\"app-info\"><strong>Жанр</strong>: Музыка<br/><strong>Разработчик/Издатель</strong>: Tal Shrestha<br/><strong>Версия</strong>: 1.5.5<br/><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</div>\n\t\t\t\t<p>Может быть, поиск текстов к понравившейся песне не столь частая ситуация, как поиск названия к услышанной мелодии, но периодически подобная необходимость возникает у всех меломанов. Сегодня поговорим о приложении <strong>Instalyrics</strong>, которое относительно легко отыщет для вас слова практически любой понравившейся песни. <span id=\"more-279283\"/></p>\n\t\t\t\t<p>Прежде всего, отмечу, что Instalyrics существует в двух вариантах: версия для iOS и версия для OS X. Каждая доступна через соответствующий магазин приложений. Суть обоих вариантов одна и та же, но в некоторых ситуациях они достаточно неплохо дополняют друг друга.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-1.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279647\"/></p>\n\t\t\t\t<p>Как работает Instalyrics? Здесь нет ничего загадочного и секретного. Существует два варианта использования приложения. В первом вы запускаете Instalyrics во время воспроизведения музыки на устройстве. Тогда программа берет информацию из тегов композиции и выполняет поиск по названию. После этого вы перенаправляетесь в Safari, где будет открыта страница одного из архивов лирики с искомой песней. Минусов у такого подхода ровно два: не все пользователи, к сожалению, держат свою музыкальную коллекцию в надлежащем виде, что может затруднить поиск. Ко второму минусу вернемся несколько позже.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279648\"/></p>\n\t\t\t\t<p>Теперь другой вариант использования. Для него вам не понадобится запускать iPod. Если вы сами знаете, для какой песни ищется текст, то можно просто ввести название исполнителя и песни в строку поиска. Дальше все произойдет аналогично первому сценарию. Теперь о втором минусе. Мне очень сложно понять логику разработчиков, которые отправляют пользователя из своего приложения в Safari. Это неудобно и только ведет к дополнительному расходу времени.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279650\"/></p>\n\t\t\t\t<p>Еще из недостатков можно отметить отсутствие всякой возможности сохранить свой поиск, чтобы вернуться к нему в любой момент. Хотя само использование стороннего браузера уже частично ставит крест на этой идее. Еще не очень понятно, почему приложение не работает в фоне. Каждый раз происходит его повторный запуск.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/instalyrics-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"433\" class=\"alignnone size-full wp-image-279649\"/></p>\n\t\t\t\t<p>Теперь о совместной работе с версией для OS X. Этот режим тоже не представляет из себя чего-то выдающегося. Приложение ищет по Wi-Fi маки расположенные поблизости. После этого, если у вас на компьютере установлена отдельная версия <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fus%2Fapp%2Finstalyrics%2Fid427010357%3Fmt%3D12\">Instalyrics</a> (169 р.), то вы сможете найти текст песни, играющей, например, в iTunes. Полезно? Вряд ли.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/Instalyrics-icon-200x200.jpg\" alt=\"\" title=\"\" width=\"200\" height=\"200\" class=\"alignnone size-medium wp-image-279297 c5\"/></p>\n\t\t\t\t<p>Подведем итоги. На первый взгляд кажется, что Instalyrics окажется удобным помощником от случая к случаю. На деле, пользователю придется столкнуться со скупым функционалом и странной логикой самого приложения. Еще раз повторю про отсутствие встроенного в Instalyrics браузера. Я так и не смог понять, чем приложение стоимостью 33 р. выигрывает перед открытием того же Safari и поиском нужного текста в Google. Еще менее полезной оказалась версия для OS X. Ведь проделать описанную выше операцию на компьютере еще проще, чем на смартфоне или планшете.</p>\n\t\t\t\t<p><strong>iPhone + iPad</strong>: 33 р. [<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=https%3A%2F%2Fitunes.apple.com%2Fru%2Fapp%2Finstalyrics%2Fid373944064%3Fmt%3D8\">iTunes link</a>]</p>\n\t\t\t\t<p>Юзабилити: 3, Функциональность: 2+, Интерфейс: 3+, Цена/качество: 2, Вердикт: 3</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Концепт iPhone 5 mini",
					"id": "http://www.iphones.ru/iNotes/279479",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>Аналитики окончательно ввели общественность в замешательство. Мы уже не знаем, чего ждать: дешёвый и пластиковый iPhone, разноцветный iPhone, iPhone с разными размерами экрана или вовсе легендарный, но до сих пор не материализовавшийся iPhone mini. Концепт последнего выглядит на удивление приемлемо и реалистично, что логично, учитывая, кто именно его «нарисовал». <span id=\"more-279479\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-5.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"292\" class=\"aligncenter size-full wp-image-279635\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-3.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"410\" class=\"aligncenter size-full wp-image-279636\"/></p>\n\t\t\t\t<p>Устройство, выход которого «откладывается» уже лет шесть, смоделировал и изобразил Мартин Хайек — тот самый, что взорвал интернет своими <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F228060\">«рендерами» iPhone 5</a> полгода назад. Как всегда, виртуальную поделку не так-то просто отличить от реальной, больно хорошо получаются они у Мартина. Дизайн mini повторяет ключевые черты «пятерки» за исключением размера корпуса — всё-таки уменьшенная модель, значит и дисплей тоже стал меньше.</p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-4.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"306\" class=\"aligncenter size-full wp-image-279638\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/1-iPhone-Mini-2.jpg\" alt=\"\" title=\"\" width=\"580\" height=\"435\" class=\"aligncenter size-full wp-image-279637\"/></p>\n\t\t\t\t<p>Никаких «космических» идей, вроде <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279407\">сканера отпечатков пальцев</a>, Мартин изображать не стал — Apple в последнее время выбрала консервативную нишу в технологиях, и приземлённая натура «рендеров» Хайека следует этой идее. Он также <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F279367\">вообразил iPad 5 поколения</a>, похожий на iPad mini. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.cultofmac.com%2F210683%2Fwhat-an-iphone-mini-iphone-5s-and-ipad-5-could-look-like-gallery%2F\">com</a>]</small></p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Решение суда отправило Apple и Amazon за стол переговоров",
					"id": "http://www.iphones.ru/iNotes/279409",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/apple-vs-amazon.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В противостоянии <strong>Apple</strong> и <strong>Amazon</strong>, касающемся торговой марки <em>App Store</em>, наконец-то появился прогресс. Противники отправятся за стол переговоров, чтобы попытаться мирно решить затянувшийся конфликт. <span id=\"more-279409\"/></p>\n\t\t\t\t<p>По мнению Apple, торговая марка App Store, которая также используется Amazon, <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F127740\">вводит</a> клиентов первой в заблуждение. Учитывая, что сторонам не удалось договориться в частном порядке, делу был дан ход в суде. Тяжба тянется с 2011 года. За это время Apple попыталась обвинить противника в демонстрации заведомо ложной рекламы, но суд этот порыв компании из Купертино не одобрил. Также, касаясь споров за торговую марку App Store, на сторону Amazon стала <strong>Microsoft</strong>.</p>\n\t\t\t\t<p>Как сообщает <em>Bloomberg</em>, суд наконец-то вынес свое решение. Двум противникам в этом деле придется <em>сесть за стол переговоров и решить конфликт между собой</em>. Первая «мирная» встреча должна состояться <em>21 марта</em>. Amazon делает ставку на то, что само выражение App Store стало общеупотребительным и компания не видит ничего плохого в том, чтобы использовать название для собственного магазина приложений. К чему придут два конкурента в ходе переговоров, узнаем через пару месяцев. <small>[<a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fappleinsider.com%2Farticles%2F13%2F01%2F16%2Fjudge-orders-apple-amazon-to-talk-settlement-in-app-store-trademark-fight\">ai</a>]</small></p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Предпремьерные кадры из фильма jOBS",
					"id": "http://www.iphones.ru/iNotes/279601",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>За считанные дни до долгожданной премьеры фильма jOBS на сайте американской ежедневной газеты USA Today <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.usatoday.com%2Fstory%2Flife%2Fmovies%2F2013%2F01%2F15%2Fsteve-wozniak-steve-jobs-biopic%2F1815651%2F\">появилась</a> короткая подборка фотографий с главными актерами. На фотографиях в образах Стиве Джобса и Стивена Возняка красуются <em>Эштон Кутчер</em> и <em>Джош Гад</em>, хотя последний мне кажется не сильно похожим на Воза. Заметка интересна не столько фотографиями, которых мы с вами видели уже уйму, сколько занимательными историями о подготовке к фильму двух актеров.<span id=\"more-279601\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease2.jpg\" alt=\"\" title=\"jobs_movie_prerelease2\" width=\"580\" height=\"435\" class=\"alignnone size-full wp-image-279610\"/></p>\n\t\t\t\t<p>Разоткровенничался в интервью газете американский актер Джош Гад, исполнитель роли Стивена Возняка:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Сходство Эштона с Джобсом просто феноменальное. Ему пришлось приложить минимум усилий, чтобы стать похожим на Стива в молодости. Когда он впервые вышел к нам на площадку, мы были шокированы. Каждый из нас был уверен, что где-то рядом с нами стоит Стив Джобс. Я считаю, что это одна из тех самых ролей, в которую Кутчер впишется идеально.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/jobs_movie_prerelease3.jpg\" alt=\"\" title=\"jobs_movie_prerelease3\" width=\"580\" height=\"435\" class=\"alignnone size-full wp-image-279612\"/></p>\n\t\t\t\t<p>Рассказал Джош и про свою роль:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Свою крайне сомнительную внешнюю схожесть с Возняком я вынужден был компенсировать изучением сотен часов видеоматериалов и заметок одного из создателей Apple. Я также записался на курсы программирования, чтобы просто быть в курсе дела. Это будет крайне интересная история дружбы и сотрудничества двух мужчин, которая полна побед и разочарований.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p>Напомню, что мировая премьера киноленты jOBS <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2FiNotes%2F277328\">назначена</a> на апрель этого года. Встретимся в кино!</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Секретный автобусный маршрут для сотрудников Apple",
					"id": "http://www.iphones.ru/iNotes/279522",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf1.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В третьей книге про Гарри Поттера упоминается волшебный автобус <em>«Ночной рыцарь»</em>, который способен доставить волшебников в любое место за считанные секунды. У компании Apple есть идентичный автобус, о котором ранее никто не слышал.<span id=\"more-279522\"/></p>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf2.jpg\" alt=\"\" title=\"applebus_sf2\" width=\"580\" height=\"439\" class=\"alignnone size-full wp-image-279560\"/></p>\n\t\t\t\t<p>Корпоративными автобусами, которые занимаются развозкой сотрудников из дома на работу и обратно, сейчас никого не удивишь. В России и Украине эта распространенная практика для больших компаний, которая позволяет быстро доставить ценных сотрудников на свои рабочие места, да еще и поработать во время поездки. В американском городе Сан-Франциско, где расположена мекка IT-компаний Кремниевая долина, курсирует несколько неприметных автобусов белого цвета. Маршрут, по которому они развозят сотрудников компании, засекречен. Никто из жителей Сан-Франциско не знает, где останавливается эти автобусы и как часто ходят. Интересными данными по поводу этих маршрутов поделилась <strong>дизайн-студия Stamen</strong>, которая в прошлом году получила грант на разработку арт-проекта с остановками общественного транспорта. Во время работы над заданием им удалось обнаружить нечто интересное:</p>\n\t\t\t\t<blockquote>\n\t\t\t\t<p>Однажды утром мы сидели на остановке и считали количество общественного транспорта на дорогах. Мы заметили, что мимо нас каждые 5 минут проезжают неприметные автобусы. Заинтересовавшись этим случаем, мы начали следить за этими автобусами и наняли велосипедистов, чтобы следовать за ними. Оказалось, что они делают в день около 150 поездок по всему городу. Наконец-то мы поняли, что это не просто множество разных автобусов, а определенная система, заранее продуманный маршрут. По нему в таких «офисах на колесах», оборудованных кондиционером и Wi-Fi, ездит местная техноэлита. То есть сотрудники компаний <em>Apple</em>, <em>Google</em>, <em>Facebook</em>, <em>Yahoo</em> и других.</p>\n\t\t\t\t</blockquote>\n\t\t\t\t<p><img src=\"http://www.iphones.ru/wp-content/uploads/2013/01/applebus_sf3.jpg\" alt=\"\" title=\"applebus_sf3\" width=\"580\" height=\"320\" class=\"alignnone size-full wp-image-279566\"/><br/></p>\n\t\t\t\t<div class=\"c5\"><small>Полная версия карты <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2013%2F01%2Fapplebus_sf2_map1.jpg\">здесь</a></small></div>\n\t\t\t\t<p>На карте по ссылке выше наблюдательные дизайнеры из Stamen <a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fstamen.com%2Fzero1%2F\">изобразили</a> <strong>засекреченные остановки автобусов</strong> каждой из компаний. Потому, если вы вдруг находитесь сейчас в Сан-Франциско, можете прийти на одну из таких остановок утром и попробовать проникнуть в святая святых компании Apple. А то и глядишь, Тим Кук оставит свой автомобиль дома и решит прокатиться со своими коллегами в автобусе.</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				},
				{
					"title": "Apple получила Эмми",
					"id": "http://www.iphones.ru/iNotes/279545",
					"image": "http://www.iphones.ru/wp-content/uploads/2013/01/EmmyApple.jpg",
					"content": "<div>\n\t\t\t\t<p></p>\n\t\t\t\t<p>В копилке Apple появилась необычная, на первый взгляд, статуэтка – <strong>Эмми</strong>, вручаемая Национальной Академией телевизионных наук и искусств США. Гигант компьютерной индустрии получил <em>«Техническую Эмми»</em> – Technology and Engineering Emmy Award в номинации <em>«Экосистема, управляющая ТВ-контентом на мобильных устройствах без использования специализированного дополнительного оборудования»</em>.<span id=\"more-279545\"/></p>\n\t\t\t\t<p>Как стало известно, Академия решила наградить Apple за несомненное лидерство <strong>iTunes Store</strong> в развитии и популяризации телевизионного контента. Награждение произошло без лишней помпы и шумихи в рамках ежегодной выставки <em>Consumer Elenctronics Show</em>, проходившей в Лас-Вегасе.</p>\n\t\t\t\t<p>Стоит сказать, что это не первая Эмми в руках Apple. Уже несколько раз детище Джобса удостаивалось такой награды в разных номинациях. В <strong>2001</strong> году она им досталась за изобретение <em>FireWire</em>, в <strong>2002</strong> за видеоредактор <em>Final Cut Pro</em>, а в <strong>2005</strong> и <strong>2006</strong> награду им принесло потоковое видео <small><a href=\"http://redirect.viglink.com?key=11fe087258b6fc0532a5ccfc924805c0&u=http%3A%2F%2Fwww.businessinsider.com%2Fapple-wins-wins-an-emmy-award-2013-1\">[bi]</a></small>.</p>\n\t\t\t\t</div><img src=\"http://pixel.quantserve.com/pixel/p-89EKCgBk8MZdE.gif\" border=\"0\" height=\"1\" width=\"1\" />",
					"date": "2013-02-12 13:59:41",
					"comment_count": 32,
					"author": {
						"id": 56899,
						"slug": "ymilosh",
						"name": "Юрий Милош",
						"first_name": "\u042e\u0440\u0438\u0439",
						"last_name": "\u041c\u0438\u043b\u043e\u0448",
						"nickname": "ymilosh",
						"url": "",
						"description": ""
					}
				}
			]);
		}
	};
});