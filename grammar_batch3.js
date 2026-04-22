// ============ Day17 ~ Day21 语法数据 ============
// 第18課～第22課（第21課笔记缺失，用教材标准内容补充）

"Day17": {
  title: "第18課 语法（难以/不能的表达）",
  grammar: [
    {
      name: "〜がたい",
      meaning: "难以…（心理上的困难）",
      structure: "動詞マス形＋がたい",
      examples: [
        {jp:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>彼<rt>かれ</rt></ruby>がこんなひどいことをするなんて、<ruby>信<rt>しん</rt></ruby>じがたい。", cn:"温柔的他竟然做出这种过分的事，难以置信。"},
        {jp:"この<ruby>味<rt>あじ</rt></ruby>は<ruby>初<rt>はじ</rt></ruby>めてなので、<ruby>言葉<rt>ことば</rt></ruby>で<ruby>表現<rt>ひょうげん</rt></ruby>しがたい。", cn:"这味道是第一次尝到，难以用语言表达。"}
      ],
      keyPoint: "只能接心理活动动词（信じる、理解する、想像する等），不能接能力动词！🧠"
    },
    {
      name: "〜かねる",
      meaning: "难以…（委婉拒绝）",
      structure: "動詞マス形＋かねる",
      examples: [
        {jp:"メールだけでは<ruby>診断<rt>しんだん</rt></ruby>しかねますので、<ruby>来院<rt>らいいん</rt></ruby>してください。", cn:"仅靠邮件难以诊断，请您来医院。"},
        {jp:"ご<ruby>意見<rt>いけん</rt></ruby>には<ruby>賛成<rt>さんせい</rt></ruby>しかねます。", cn:"难以赞同您的意见。"}
      ],
      keyPoint: "正式场合的礼貌拒绝，形式是肯定但意思是否定！🤝"
    },
    {
      name: "〜ようがない／〜ようもない",
      meaning: "没办法…／无法…",
      structure: "動詞マス形＋ようがない",
      examples: [
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>しようがない。", cn:"不知道他的联系方式，无法联系。"},
        {jp:"<ruby>準備<rt>じゅんび</rt></ruby>が<ruby>万全<rt>ばんぜん</rt></ruby>だから、<ruby>失敗<rt>しっぱい</rt></ruby>するようがない。", cn:"准备万全，不可能失败。"}
      ],
      keyPoint: "客观上无法实现。「〜としか言いようがない」是常用套话 💬"
    },
    {
      name: "〜得る／〜得ない",
      meaning: "可能／不可能（可能性判断）",
      structure: "動詞マス形＋得る（える／うる）／得ない（えない）",
      examples: [
        {jp:"<ruby>誰<rt>だれ</rt></ruby>でもがんにかかり<ruby>得<rt>う</rt></ruby>る。", cn:"任何人都有可能患癌症。"},
        {jp:"100メートルを5<ruby>秒<rt>びょう</rt></ruby>で<ruby>走<rt>はし</rt></ruby>るのはあり<ruby>得<rt>え</rt></ruby>ない。", cn:"5秒跑完100米是不可能的。"}
      ],
      keyPoint: "肯定读「える」或「うる」，否定只读「えない」。「ありえない」超常用！⚡"
    },
    {
      name: "〜べからず",
      meaning: "不可…／禁止…（告示用语）",
      structure: "動詞辞書形＋べからず",
      examples: [
        {jp:"<ruby>芝生<rt>しばふ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>るべからず。", cn:"禁止踩踏草坪。"},
        {jp:"ここにごみを<ruby>捨<rt>す</rt></ruby>てるべからず。", cn:"禁止在此扔垃圾。"}
      ],
      keyPoint: "古语表达，现在多用于告示牌。相当于「〜てはいけない」🚫"
    }
  ],
  questions: [
    {q:"<ruby>優<rt>やさ</rt></ruby>しい<ruby>彼<rt>かれ</rt></ruby>がそんなことをするなんて、<ruby>信<rt>しん</rt></ruby>じ＿＿＿。", options:["かねる","がたい","ようがない","得ない"], answer:1, grammar:"がたい", explanation:"「信じる」是心理活动动词，表示心理上难以接受用「がたい」。"},
    {q:"メールだけでは<ruby>診断<rt>しんだん</rt></ruby>し＿＿＿ので、<ruby>来院<rt>らいいん</rt></ruby>してください。", options:["がたい","ようがない","かねます","得ない"], answer:2, grammar:"かねる", explanation:"正式场合的委婉拒绝用「かねる」，敬体为「かねます」。"},
    {q:"<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からないので、<ruby>連絡<rt>れんらく</rt></ruby>し＿＿＿。", options:["がたい","かねる","ようがない","べからず"], answer:2, grammar:"ようがない", explanation:"客观上没有联系方式所以无法联系，用「ようがない」。"},
    {q:"<ruby>誰<rt>だれ</rt></ruby>でも<ruby>事故<rt>じこ</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>い＿＿＿。", options:["がたい","かねる","ようがない","得る"], answer:3, grammar:"得る", explanation:"任何人都有可能遭遇事故，表示可能性用「得る」。"},
    {q:"100メートルを5<ruby>秒<rt>びょう</rt></ruby>で<ruby>走<rt>はし</rt></ruby>るのはあり＿＿＿。", options:["がたい","かねる","得ない","ようがない"], answer:2, grammar:"得ない", explanation:"5秒跑100米是不可能的，否定可能性用「得ない」（えない）。"},
    {q:"ご<ruby>提案<rt>ていあん</rt></ruby>については<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れ＿＿＿。", options:["がたい","かねます","ようがない","べからず"], answer:1, grammar:"かねる", explanation:"难以接受提案，正式场合委婉拒绝用「かねます」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>は<ruby>理解<rt>りかい</rt></ruby>し＿＿＿。", options:["かねる","がたい","得ない","ようがない"], answer:1, grammar:"がたい", explanation:"「理解する」是心理动词，难以理解用「がたい」。"},
    {q:"<ruby>芝生<rt>しばふ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る＿＿＿。", options:["かねる","がたい","ようがない","べからず"], answer:3, grammar:"べからず", explanation:"告示牌上的禁止表达用「べからず」。"}
  ]
},

"Day18": {
  title: "第19課 语法（比较与评价表达）",
  grammar: [
    {
      name: "〜わりに（は）",
      meaning: "与…相比之下（与预期相反）",
      structure: "名詞＋の／形容詞／動詞普通形＋わりに（は）",
      examples: [
        {jp:"お<ruby>菓子<rt>かし</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の<ruby>割<rt>わり</rt></ruby>には<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", cn:"这点心相对于价格来说量太少了。"},
        {jp:"<ruby>若<rt>わか</rt></ruby>いわりにしっかりしている。", cn:"年纪轻轻却很可靠。"}
      ],
      keyPoint: "核心是「与预期相反」！不是简单的「虽然但是」。接有幅度概念的词 📊"
    },
    {
      name: "〜にしては",
      meaning: "作为…来说（与预期相反）",
      structure: "具体数値／名詞＋にしては",
      examples: [
        {jp:"18<ruby>歳<rt>さい</rt></ruby>にしてはしっかりしている。", cn:"作为18岁来说很可靠。"},
        {jp:"<ruby>二月<rt>にがつ</rt></ruby>にしては<ruby>暖<rt>あたた</rt></ruby>かい。", cn:"对二月来说很暖和。"}
      ],
      keyPoint: "接具体数值或无幅度概念的名词。和「わりに」的区别是接续对象不同！🔢"
    },
    {
      name: "〜だけあって／さすが",
      meaning: "不愧是…（名副其实）",
      structure: "動詞普通形／名詞＋の＋だけあって",
      examples: [
        {jp:"<ruby>十年<rt>じゅうねん</rt></ruby>も<ruby>住<rt>す</rt></ruby>んでいるだけあって、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>だ。", cn:"不愧住了十年，日语很好。"},
        {jp:"さすがオリンピック、<ruby>試合<rt>しあい</rt></ruby>が<ruby>素晴<rt>すば</rt></ruby>らしい。", cn:"不愧是奥运会，比赛精彩。"}
      ],
      keyPoint: "强调因果关系和认可。「さすが」是副词可直接修饰句子 🏅"
    },
    {
      name: "〜にとって",
      meaning: "对于…来说（立场/视角）",
      structure: "名詞＋にとって（は）",
      examples: [
        {jp:"<ruby>私<rt>わたし</rt></ruby>にとって<ruby>家族<rt>かぞく</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>だ。", cn:"对我来说家人最重要。"},
        {jp:"<ruby>他人<rt>たにん</rt></ruby>にとっては<ruby>普通<rt>ふつう</rt></ruby>の<ruby>石<rt>いし</rt></ruby>だが、<ruby>私<rt>わたし</rt></ruby>にとっては<ruby>宝物<rt>たからもの</rt></ruby>だ。", cn:"对别人来说是普通的石头，对我来说是宝物。"}
      ],
      keyPoint: "强调立场/视角。vs「に対して」：に対して表示动作方向/对象 👤"
    }
  ],
  questions: [
    {q:"この<ruby>料理<rt>りょうり</rt></ruby>は<ruby>値段<rt>ねだん</rt></ruby>の＿＿＿<ruby>量<rt>りょう</rt></ruby>が<ruby>少<rt>すく</rt></ruby>ない。", options:["にしては","にとって","わりには","だけあって"], answer:2, grammar:"わりに", explanation:"价格是有幅度概念的词，与预期相反（贵但量少）用「わりに」。"},
    {q:"18<ruby>歳<rt>さい</rt></ruby>＿＿＿しっかりしている。", options:["のわりに","にしては","にとって","だけあって"], answer:1, grammar:"にしては", explanation:"18岁是具体数值，作为18岁来说很可靠，用「にしては」。"},
    {q:"<ruby>十年<rt>じゅうねん</rt></ruby>も<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる＿＿＿、<ruby>日本語<rt>にほんご</rt></ruby>がペラペラだ。", options:["わりに","にしては","だけあって","にとって"], answer:2, grammar:"だけあって", explanation:"不愧住了十年，日语流利。强调因果认可用「だけあって」。"},
    {q:"<ruby>私<rt>わたし</rt></ruby>＿＿＿<ruby>家族<rt>かぞく</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>大切<rt>たいせつ</rt></ruby>だ。", options:["にしては","わりに","だけあって","にとって"], answer:3, grammar:"にとって", explanation:"对我来说，表示立场/视角用「にとって」。"},
    {q:"<ruby>二月<rt>にがつ</rt></ruby>＿＿＿<ruby>暖<rt>あたた</rt></ruby>かい。", options:["のわりに","にしては","にとっては","だけあって"], answer:1, grammar:"にしては", explanation:"二月是具体月份（无幅度），作为二月来说暖和，用「にしては」。"},
    {q:"<ruby>若<rt>わか</rt></ruby>い＿＿＿しっかりしている。", options:["にしては","わりに","だけあって","にとって"], answer:1, grammar:"わりに", explanation:"「若い」是有幅度的形容词，年轻却可靠（与预期相反）用「わりに」。"},
    {q:"＿＿＿プロの<ruby>選手<rt>せんしゅ</rt></ruby>だ、<ruby>技術<rt>ぎじゅつ</rt></ruby>が<ruby>素晴<rt>すば</rt></ruby>らしい。", options:["わりに","にしては","にとって","さすが"], answer:3, grammar:"さすが", explanation:"不愧是职业选手，技术了得。「さすが」作副词直接修饰句子。"},
    {q:"<ruby>社員<rt>しゃいん</rt></ruby>は<ruby>社長<rt>しゃちょう</rt></ruby>＿＿＿<ruby>不満<rt>ふまん</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", options:["にとって","に対して","にしては","わりに"], answer:1, grammar:"に対して", explanation:"员工对社长有不满，动作方向/对象用「に対して」，不是「にとって」（立场）。"}
  ]
},

"Day19": {
  title: "第20課 语法（时间关系与结果状态）",
  grammar: [
    {
      name: "〜たところ",
      meaning: "…之后，结果…（引导后续结果）",
      structure: "動詞た形＋ところ",
      examples: [
        {jp:"<ruby>課長<rt>かちょう</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>したところ、2<ruby>週間<rt>しゅうかん</rt></ruby><ruby>休<rt>やす</rt></ruby>めると<ruby>言<rt>い</rt></ruby>われました。", cn:"和课长商量后，被告知可以休息两周。"},
        {jp:"<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだところ、すぐに<ruby>熱<rt>ねつ</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がった。", cn:"吃了药之后，烧很快就退了。"}
      ],
      keyPoint: "N2的「たところ」≠N4的「たところだ（刚刚完成）」，这里引导后续结果！🔄"
    },
    {
      name: "〜たきり",
      meaning: "自从…之后就再也没有…",
      structure: "動詞た形＋きり",
      examples: [
        {jp:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んだきり、この<ruby>本<rt>ほん</rt></ruby>は<ruby>一度<rt>いちど</rt></ruby>も<ruby>読<rt>よ</rt></ruby>んでいません。", cn:"自从小时候读过之后，这本书就再也没读过。"},
        {jp:"<ruby>出<rt>で</rt></ruby>かけたきり、まだ<ruby>帰<rt>かえ</rt></ruby>ってきていません。", cn:"出门之后就再也没回来。"}
      ],
      keyPoint: "强调动作完成后状态持续不变，含遗憾/不满语气 😟"
    },
    {
      name: "〜あとで vs 〜した後",
      meaning: "…之后（あとで→负面结果 / した後→决断结果）",
      structure: "動詞た形＋あとで／した後",
      examples: [
        {jp:"5<ruby>時間<rt>じかん</rt></ruby>も<ruby>討論<rt>とうろん</rt></ruby>したあとで、<ruby>結論<rt>けつろん</rt></ruby>が<ruby>出<rt>で</rt></ruby>ませんでした。", cn:"讨论了5小时后，没能得出结论。"},
        {jp:"<ruby>何度<rt>なんど</rt></ruby>も<ruby>相談<rt>そうだん</rt></ruby>した<ruby>後<rt>あと</rt></ruby>、A<ruby>案<rt>あん</rt></ruby>を<ruby>採用<rt>さいよう</rt></ruby>することに<ruby>決<rt>き</rt></ruby>めました。", cn:"多次讨论后，决定采用A方案。"}
      ],
      keyPoint: "「あとで」后接负面结果，「した後」后接决断/中性结果。考试高频考点！⚠️"
    },
    {
      name: "〜ところだった",
      meaning: "差点就…（实际未发生）",
      structure: "動詞辞書形／ない形＋ところだった",
      examples: [
        {jp:"うっかり<ruby>約束<rt>やくそく</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れるところだった。", cn:"差点忘了约定。"},
        {jp:"もう<ruby>少<rt>すこ</rt></ruby>しで<ruby>火事<rt>かじ</rt></ruby>になるところだった。", cn:"差点酿成火灾。"}
      ],
      keyPoint: "常与「うっかり」「危うく」「もう少しで」搭配。实际没发生！😰"
    },
    {
      name: "〜ずじまい",
      meaning: "最终没能…（不了了之，含遗憾）",
      structure: "動詞ない形（去ない）＋ずじまい",
      examples: [
        {jp:"<ruby>田中<rt>たなか</rt></ruby>さんの<ruby>連絡先<rt>れんらくさき</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からずじまいだった。", cn:"最终没能问到田中的联系方式。"},
        {jp:"<ruby>旅行<rt>りょこう</rt></ruby>したかったが、<ruby>忙<rt>いそが</rt></ruby>しくて<ruby>行<rt>い</rt></ruby>かずじまいで<ruby>帰国<rt>きこく</rt></ruby>した。", cn:"想去旅行但太忙，最终没能去就回国了。"}
      ],
      keyPoint: "含遗憾语气。する→せずじまい（特殊变化）📝"
    }
  ],
  questions: [
    {q:"<ruby>課長<rt>かちょう</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>した＿＿＿、<ruby>休<rt>やす</rt></ruby>みをもらえました。", options:["きり","ところ","あとで","ずじまい"], answer:1, grammar:"たところ", explanation:"商量之后得到了结果（获准休假），引导后续结果用「たところ」。"},
    {q:"<ruby>子供<rt>こども</rt></ruby>の<ruby>頃<rt>ころ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>った＿＿＿、もう20<ruby>年<rt>ねん</rt></ruby>も<ruby>会<rt>あ</rt></ruby>っていない。", options:["ところ","あとで","きり","ずじまい"], answer:2, grammar:"たきり", explanation:"小时候见过之后就再也没见过，状态持续不变用「たきり」。"},
    {q:"うっかり<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごす＿＿＿。", options:["きりだった","ところだった","ずじまいだった","あとだった"], answer:1, grammar:"ところだった", explanation:"差点坐过站（实际没坐过），用「ところだった」。搭配「うっかり」。"},
    {q:"さんざん<ruby>悩<rt>なや</rt></ruby>んだ＿＿＿、<ruby>何<rt>なに</rt></ruby>も<ruby>買<rt>か</rt></ruby>わずに<ruby>帰<rt>かえ</rt></ruby>った。", options:["ところ","きり","あとで","後"], answer:2, grammar:"あとで", explanation:"纠结半天后什么都没买（负面结果），用「あとで」。"},
    {q:"<ruby>何度<rt>なんど</rt></ruby>も<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った＿＿＿、<ruby>離婚<rt>りこん</rt></ruby>することに<ruby>決<rt>き</rt></ruby>めた。", options:["あとで","ところ","きり","後"], answer:3, grammar:"した後", explanation:"多次商量后做出决断（离婚），决断结果用「した後」。"},
    {q:"<ruby>結局<rt>けっきょく</rt></ruby><ruby>彼女<rt>かのじょ</rt></ruby>に<ruby>告白<rt>こくはく</rt></ruby>でき＿＿＿だった。", options:["たきり","るところ","ずじまい","たあとで"], answer:2, grammar:"ずじまい", explanation:"最终没能告白，含遗憾语气用「ずじまい」。"},
    {q:"<ruby>出<rt>で</rt></ruby>かけた＿＿＿、まだ<ruby>帰<rt>かえ</rt></ruby>ってきていない。", options:["ところ","あとで","ずじまい","きり"], answer:3, grammar:"たきり", explanation:"出门后一直没回来，状态持续用「たきり」。"},
    {q:"<ruby>危<rt>あや</rt></ruby>うく<ruby>財布<rt>さいふ</rt></ruby>を<ruby>落<rt>お</rt></ruby>とす＿＿＿。", options:["きりだ","ずじまいだ","ところだった","あとだ"], answer:2, grammar:"ところだった", explanation:"险些把钱包弄丢（实际没丢），搭配「危うく」用「ところだった」。"}
  ]
},

"Day20": {
  title: "第21課 语法（程度・极端表达）",
  grammar: [
    {
      name: "〜ぐらい／〜くらい",
      meaning: "…左右／…程度（表示大概程度）",
      structure: "名詞／動詞普通形＋ぐらい／くらい",
      examples: [
        {jp:"<ruby>泣<rt>な</rt></ruby>きたいぐらい<ruby>悔<rt>くや</rt></ruby>しかった。", cn:"后悔到想哭的程度。"},
        {jp:"<ruby>死<rt>し</rt></ruby>ぬほどではないが、<ruby>倒<rt>たお</rt></ruby>れるくらい<ruby>疲<rt>つか</rt></ruby>れた。", cn:"虽不至于累死，但累到快要倒下的程度。"}
      ],
      keyPoint: "N2用法：不是「大约」，而是表示极端程度！「〜ぐらい＋形容詞」= 到了…的程度 💥"
    },
    {
      name: "〜など／〜なんか／〜なんて",
      meaning: "…什么的（轻视/谦虚/惊讶）",
      structure: "名詞＋など／なんか／なんて",
      examples: [
        {jp:"あんな<ruby>映画<rt>えいが</rt></ruby>なんか<ruby>見<rt>み</rt></ruby>る<ruby>価値<rt>かち</rt></ruby>もない。", cn:"那种电影什么的根本不值得看。"},
        {jp:"<ruby>私<rt>わたし</rt></ruby>なんかまだまだです。", cn:"我什么的还差得远呢。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>合格<rt>ごうかく</rt></ruby>するなんて<ruby>信<rt>しん</rt></ruby>じられない。", cn:"他竟然合格了，真不敢相信。"}
      ],
      keyPoint: "など（书面）＞なんか（口语轻视）＞なんて（口语惊讶）。语气由正式到随意 💬"
    },
    {
      name: "〜まで／〜までして／〜てまで",
      meaning: "甚至到…的地步（极端手段）",
      structure: "名詞＋まで／動詞て形＋まで／動詞マス形＋までして",
      examples: [
        {jp:"<ruby>借金<rt>しゃっきん</rt></ruby>までしてブランド<ruby>品<rt>ひん</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>はない。", cn:"没必要借钱到买名牌的地步。"},
        {jp:"<ruby>親<rt>おや</rt></ruby>に<ruby>嘘<rt>うそ</rt></ruby>をついてまで<ruby>遊<rt>あそ</rt></ruby>びに<ruby>行<rt>い</rt></ruby>きたくない。", cn:"不想撒谎骗父母到去玩的地步。"}
      ],
      keyPoint: "强调为了某目的不惜采取极端手段，通常含否定评价语气 😤"
    },
    {
      name: "〜としても〜ない",
      meaning: "即使想…也不能…",
      structure: "動詞意向形＋としても＋動詞ない形",
      examples: [
        {jp:"<ruby>忘<rt>わす</rt></ruby>れようとしても<ruby>忘<rt>わす</rt></ruby>れられない。", cn:"即使想忘也忘不了。"},
        {jp:"<ruby>説明<rt>せつめい</rt></ruby>しようとしても、うまく<ruby>言葉<rt>ことば</rt></ruby>にできない。", cn:"即使想解释也无法很好地用语言表达。"}
      ],
      keyPoint: "前后用同一动词或相关动词。表示努力也做不到的无奈 😣"
    },
    {
      name: "〜さえ",
      meaning: "甚至…／连…都…（举极端例子）",
      structure: "名詞＋さえ／動詞マス形＋さえすれば",
      examples: [
        {jp:"<ruby>漢字<rt>かんじ</rt></ruby>どころか、ひらがなさえ<ruby>読<rt>よ</rt></ruby>めない。", cn:"别说汉字了，连平假名都不会读。"},
        {jp:"<ruby>努力<rt>どりょく</rt></ruby>さえすれば、<ruby>合格<rt>ごうかく</rt></ruby>できる。", cn:"只要努力就能合格。"}
      ],
      keyPoint: "两种用法：①连…都…（极端举例）②只要…就…（さえ〜ば）💡"
    },
    {
      name: "〜てでも",
      meaning: "即使…也要（不惜代价）",
      structure: "動詞て形＋でも",
      examples: [
        {jp:"<ruby>徹夜<rt>てつや</rt></ruby>してでも<ruby>明日<rt>あした</rt></ruby>までに<ruby>仕上<rt>しあ</rt></ruby>げる。", cn:"即使通宵也要在明天之前完成。"},
        {jp:"<ruby>借金<rt>しゃっきん</rt></ruby>してでも<ruby>留学<rt>りゅうがく</rt></ruby>したい。", cn:"即使借钱也想留学。"}
      ],
      keyPoint: "强调决心，不惜一切代价。比「ても」语气更强烈 🔥"
    }
  ],
  questions: [
    {q:"<ruby>泣<rt>な</rt></ruby>きたい＿＿＿<ruby>悔<rt>くや</rt></ruby>しかった。", options:["さえ","ぐらい","まで","なんか"], answer:1, grammar:"ぐらい", explanation:"后悔到想哭的程度，表示极端程度用「ぐらい」。"},
    {q:"あんな<ruby>映画<rt>えいが</rt></ruby>＿＿＿<ruby>見<rt>み</rt></ruby>る<ruby>価値<rt>かち</rt></ruby>もない。", options:["さえ","ぐらい","なんか","てでも"], answer:2, grammar:"なんか", explanation:"那种电影什么的不值得看，口语中表示轻视用「なんか」。"},
    {q:"<ruby>借金<rt>しゃっきん</rt></ruby>＿＿＿ブランド<ruby>品<rt>ひん</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>必要<rt>ひつよう</rt></ruby>はない。", options:["なんか","さえ","までして","てでも"], answer:2, grammar:"までして", explanation:"没必要借钱到买名牌的地步，极端手段含否定评价用「までして」。"},
    {q:"<ruby>忘<rt>わす</rt></ruby>れようとしても＿＿＿。", options:["忘れたい","忘れられない","忘れるまで","忘れなんか"], answer:1, grammar:"としても〜ない", explanation:"即使想忘也忘不了，「〜ようとしても〜ない」的固定句式。"},
    {q:"<ruby>漢字<rt>かんじ</rt></ruby>どころか、ひらがな＿＿＿<ruby>読<rt>よ</rt></ruby>めない。", options:["なんか","ぐらい","まで","さえ"], answer:3, grammar:"さえ", explanation:"连平假名都不会读，举极端例子用「さえ」。"},
    {q:"<ruby>努力<rt>どりょく</rt></ruby>＿＿＿すれば、<ruby>合格<rt>ごうかく</rt></ruby>できる。", options:["まで","なんか","さえ","ぐらい"], answer:2, grammar:"さえ", explanation:"只要努力就能合格，「さえ〜ば」表示充分条件。"},
    {q:"<ruby>徹夜<rt>てつや</rt></ruby>して＿＿＿<ruby>明日<rt>あした</rt></ruby>までに<ruby>仕上<rt>しあ</rt></ruby>げる。", options:["さえ","まで","でも","なんか"], answer:2, grammar:"てでも", explanation:"即使通宵也要完成，不惜代价的决心用「てでも」。"},
    {q:"<ruby>彼<rt>かれ</rt></ruby>が<ruby>合格<rt>ごうかく</rt></ruby>する＿＿＿<ruby>信<rt>しん</rt></ruby>じられない。", options:["さえ","ぐらい","なんて","まで"], answer:2, grammar:"なんて", explanation:"他竟然合格了，表示惊讶/意外用「なんて」。"}
  ]
},

"Day21": {
  title: "第22課 语法（推测与委婉表达）",
  grammar: [
    {
      name: "〜かねない",
      meaning: "有可能…（负面担忧）",
      structure: "動詞マス形＋かねない",
      examples: [
        {jp:"<ruby>個人<rt>こじん</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>悪用<rt>あくよう</rt></ruby>されかねない。", cn:"个人信息有可能被盗用。"},
        {jp:"このままでは<ruby>大<rt>おお</rt></ruby>きな<ruby>事故<rt>じこ</rt></ruby>になりかねない。", cn:"照这样下去有可能酿成大事故。"}
      ],
      keyPoint: "仅用于负面事项！形式有否定词「ない」但意思是肯定（可能发生）⚠️"
    },
    {
      name: "〜恐れがある",
      meaning: "恐怕会…／有…的危险",
      structure: "動詞普通形／名詞＋の＋恐れがある",
      examples: [
        {jp:"<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>する<ruby>恐<rt>おそ</rt></ruby>れがあります。", cn:"台风恐怕会靠近。"},
        {jp:"<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>洪水<rt>こうずい</rt></ruby>の<ruby>恐<rt>おそ</rt></ruby>れがある。", cn:"有因大雨引发洪水的危险。"}
      ],
      keyPoint: "多用于灾害/风险等正式场景，新闻报道常用 📺"
    },
    {
      name: "〜に違いない",
      meaning: "一定是…／肯定是…（有根据的确信）",
      structure: "普通形＋に違いない",
      examples: [
        {jp:"こんなに<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なら、<ruby>長<rt>なが</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいたに<ruby>違<rt>ちが</rt></ruby>いない。", cn:"日语这么好的话，一定在日本住了很久。"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>は<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>慣<rt>な</rt></ruby>れたに<ruby>違<rt>ちが</rt></ruby>いない。", cn:"他一定习惯了生活。"}
      ],
      keyPoint: "基于逻辑推断的确信，书面语。口语版是「にきまっている」📖"
    },
    {
      name: "〜にきまっている",
      meaning: "肯定是…（主观确信，口语）",
      structure: "普通形＋にきまっている",
      examples: [
        {jp:"そんな<ruby>話<rt>はなし</rt></ruby>は<ruby>嘘<rt>うそ</rt></ruby>にきまっている。", cn:"那种话肯定是骗人的。"},
        {jp:"こんなに<ruby>練習<rt>れんしゅう</rt></ruby>したんだから、<ruby>勝<rt>か</rt></ruby>つにきまっている。", cn:"练习了这么多，肯定会赢。"}
      ],
      keyPoint: "口语版的「に違いない」，语气更随意更主观 🗣️"
    },
    {
      name: "〜ではあるまいか",
      meaning: "难道不是…吗（书面推测反问）",
      structure: "普通形＋のではあるまいか",
      examples: [
        {jp:"この<ruby>計画<rt>けいかく</rt></ruby>は<ruby>無理<rt>むり</rt></ruby>なのではあるまいか。", cn:"这个计划难道不是不可行的吗？"},
        {jp:"<ruby>彼<rt>かれ</rt></ruby>の<ruby>意見<rt>いけん</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しいのではあるまいか。", cn:"他的意见难道不是正确的吗？"}
      ],
      keyPoint: "书面语，相当于口语的「のではないか」。用于委婉提出推测 📝"
    }
  ],
  questions: [
    {q:"<ruby>個人<rt>こじん</rt></ruby><ruby>情報<rt>じょうほう</rt></ruby>が<ruby>悪用<rt>あくよう</rt></ruby>され＿＿＿。", options:["かねる","かねない","に違いない","恐れがある"], answer:1, grammar:"かねない", explanation:"个人信息有可能被盗用（负面担忧），用「かねない」。"},
    {q:"<ruby>台風<rt>たいふう</rt></ruby>が<ruby>接近<rt>せっきん</rt></ruby>する＿＿＿。", options:["かねない","に違いない","にきまっている","恐れがあります"], answer:3, grammar:"恐れがある", explanation:"台风靠近是灾害风险，正式场合用「恐れがある」。"},
    {q:"こんなに<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>なら、<ruby>長<rt>なが</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいた＿＿＿。", options:["かねない","恐れがある","にきまっている","に違いない"], answer:3, grammar:"に違いない", explanation:"基于「日语好」的逻辑推断「一定住了很久」，用「に違いない」。"},
    {q:"そんな<ruby>話<rt>はなし</rt></ruby>は<ruby>嘘<rt>うそ</rt></ruby>＿＿＿。", options:["に違いない","にきまっている","かねない","恐れがある"], answer:1, grammar:"にきまっている", explanation:"「肯定是骗人的」，口语中的主观确信用「にきまっている」。"},
    {q:"このままでは<ruby>大<rt>おお</rt></ruby>きな<ruby>事故<rt>じこ</rt></ruby>になり＿＿＿。", options:["に違いない","にきまっている","かねない","恐れがない"], answer:2, grammar:"かねない", explanation:"照这样下去可能酿成大事故（负面担忧），用「かねない」。"},
    {q:"ご<ruby>質問<rt>しつもん</rt></ruby>には<ruby>回答<rt>かいとう</rt></ruby>し＿＿＿。", options:["かねない","かねます","に違いない","恐れがある"], answer:1, grammar:"かねる", explanation:"难以回答您的问题，正式委婉拒绝用「かねます」。注意「かねる」≠「かねない」！"},
    {q:"<ruby>大雨<rt>おおあめ</rt></ruby>による<ruby>洪水<rt>こうずい</rt></ruby>の＿＿＿。", options:["かねない","に違いない","にきまっている","恐れがある"], answer:3, grammar:"恐れがある", explanation:"有洪水的危险，灾害风险正式表达用「恐れがある」。"},
    {q:"こんなに<ruby>練習<rt>れんしゅう</rt></ruby>したんだから、<ruby>勝<rt>か</rt></ruby>つ＿＿＿。", options:["かねない","恐れがある","にきまっている","に違いない"], answer:2, grammar:"にきまっている", explanation:"练了这么多肯定赢，口语中的主观确信用「にきまっている」。"}
  ]
}
