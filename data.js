const scriptsData = {
    wk01: {
        title: "Emily in Paris | 시즌1 - EP1 ",
        audio: "WK01 Dubbing.wav",
        unlockDate: "2026-09-10T00:00:00+09:00", // 9월 10일 공개
        sentences: [
            {
                speaker: 'S',
                start: 0.000, end: 2.980,
                ipa: "/ðɪs ɪz məˈsjɜr bruˈsɑr. hiz ðə ˈfaʊndər əv sævˈwɑr./",
                trans: "이쪽은 브루사르 씨예요. 사부아르의 설립자이시죠.",
                chunks: [
                    { text: "This is Monsieur Broussard.", s: 0.000, e: 1.350 },
                    { text: "He's the founder of Savoir.", s: 1.350, e: 2.980 }
                ]
            },
            {
                speaker: 'E',
                start: 2.980, end: 4.470,
                ipa: "/ɑ, ˈɛmɪli ˈkupər./",
                trans: "아, 에밀리 쿠퍼.",
                chunks: [
                    { text: "Ah, Emily Cooper.", s: 2.980, e: 4.470 }
                ]
            },
            {
                speaker: 'B',
                start: 4.470, end: 5.120,
                ipa: "/hɛˈloʊ./",
                trans: "안녕하세요.",
                chunks: [
                    { text: "Hello.", s: 4.470, e: 4.770 }
                ]
            },
            {
                speaker: 'E',
                start: 4.770, end: 8.900,
                ipa: "/oʊ. ɪt ɪz soʊ naɪs tu mit ju, məˈsjɜr bruˈsɑr./",
                trans: "아. 만나 뵙게 되어 정말 반갑습니다, 브루사르 씨.",
                chunks: [
                    { text: "Oh.", s: 4.770, e: 5.120 },
                    { text: "It is so nice to meet you,", s: 6.700, e: 8.120 },
                    { text: "Monsieur Broussard.", s: 8.120, e: 8.900 }
                ]
            },
            {
                speaker: 'B',
                start: 8.900, end: 14.160,
                ipa: "/ɪts ə ˈplɛʒər. ˈwɛlkəm tu ˈpærɪs. soʊ, juv kʌm tu titʃ ðə frɛntʃ sʌm əˈmɛrɪkən trɪks?/",
                trans: "저도 반갑습니다. 파리에 온 걸 환영해요. 그래, 미국식 방식을 프랑스인들에게 가르쳐 주러 왔다고?",
                chunks: [
                    { text: "It's a pleasure.", s: 8.900, e: 9.840 },
                    { text: "Welcome to Paris.", s: 9.840, e: 11.150 },
                    { text: "So, you've come to teach the French", s: 11.150, e: 13.100 },
                    { text: "some American tricks?", s: 13.100, e: 14.160 }
                ]
            },
            {
                speaker: 'E',
                start: 14.640, end: 17.080,
                ipa: "/aɪm ʃʊr wi hæv ə lɑt tu lɜrn frʌm itʃ ˈʌðər./",
                trans: "서로 배울 점이 많을 거라고 확신해요.",
                chunks: [
                    { text: "I'm sure we have a", s: 14.640, e: 15.200 },
                    { text: "lot to learn from each other.", s: 15.200, e: 17.080 }
                ]
            },
            {
                speaker: 'B',
                start: 17.080, end: 20.410,
                ipa: "/bʌt jʊr ɪkˈspɪriəns ɪz nɑt wɪð ˈfæʃən ænd ˈlʌkʒəri brændz?/",
                trans: "하지만 패션이나 럭셔리 브랜드 쪽 경력은 없지 않나?",
                chunks: [
                    { text: "But your experience", s: 17.080, e: 18.240 },
                    { text: "is not with fashion and", s: 18.240, e: 19.550 },
                    { text: "luxury brands?", s: 19.550, e: 20.410 }
                ]
            },
            {
                speaker: 'E',
                start: 20.410, end: 25.500,
                ipa: "/tru. moʊst əv maɪ ɪkˈspɪriəns hæz bɪn ɪn prəˈmoʊtɪŋ ˌfɑrməˈsutɪkəlz ænd ˌdʒɛriˈætrɪk kɛr fəˈsɪlɪtiz./",
                trans: "맞아요. 제 경력의 대부분은 제약 회사와 노인 요양 시설 홍보였어요.",
                chunks: [
                    { text: "True.", s: 20.410, e: 21.120 },
                    { text: "Most of my experience", s: 21.120, e: 22.030 },
                    { text: "has been in promoting", s: 22.030, e: 22.760 },
                    { text: "pharmaceuticals and geriatric care facilities.", s: 22.760, e: 25.500 }
                ]
            },
            {
                speaker: 'B',
                start: 25.500, end: 26.330,
                ipa: "/ɪn ʃɪˈkɑɡoʊ./",
                trans: "시카고에서.",
                chunks: [
                    { text: "In Chicago.", s: 25.500, e: 26.330 }
                ]
            },
            {
                speaker: 'E',
                start: 26.330, end: 28.020,
                ipa: "/jɛs. aɪ min, wi./",
                trans: "네. 제 말은, 위(oui).",
                chunks: [
                    { text: "Yes. I mean, oui.", s: 26.330, e: 28.020 }
                ]
            },
            {
                speaker: 'B',
                start: 28.860, end: 32.320,
                ipa: "/aɪ wʌz ɪn ʃɪˈkɑɡoʊ wʌns ænd aɪ eɪt ðə dip-dɪʃ ˈpitsə./",
                trans: "예전에 시카고에 갔을 때 딥디쉬 피자를 먹어봤지.",
                chunks: [
                    { text: "I was in Chicago once", s: 28.860, e: 30.620 },
                    { text: "and I ate the deep-dish pizza.", s: 30.620, e: 32.320 }
                ]
            },
            {
                speaker: 'E',
                start: 32.320, end: 35.460,
                ipa: "/ðæt ɪz ɑr ˈspɛʃəlti. wi teɪk ə lɑt əv praɪd./",
                trans: "우리 명물이자 자랑거리죠.",
                chunks: [
                    { text: "That is our specialty.", s: 32.320, e: 34.170 },
                    { text: "We take a lot of pride.", s: 34.170, e: 35.460 }
                ]
            },
            {
                speaker: 'B',
                start: 35.460, end: 37.540,
                ipa: "/ʌ, ɪt wʌz ʌ, \"deɪɡəˈlɑs\". haʊ ju seɪ?/",
                trans: "어, 그건 좀, 'dégueulasse', 그러니까 뭐라고 하더라?",
                chunks: [
                    { text: "Uh, it was uh, \"dégueulasse\".", s: 35.460, e: 36.810 },
                    { text: "how you say?", s: 36.810, e: 37.540 }
                ]
            },
            {
                speaker: 'S',
                start: 37.540, end: 38.300,
                ipa: "/dɪsˈɡʌstɪŋ./",
                trans: "끔찍했어.",
                chunks: [
                    { text: "Disgusting.", s: 37.540, e: 38.300 },
                ]
            },
            {
                speaker: 'B',
                start: 39.070, end: 41.030,
                ipa: "/laɪk ə kiʃ meɪd əv sɪˈmɛnt./",
                trans: "시멘트로 만든 키슈 같았지.",
                chunks: [
                    { text: "Like a quiche made of cement.", s: 39.070, e: 41.030 }
                ]
            },
            {
                speaker: 'E',
                start: 41.030, end: 43.060,
                ipa: "/oʊ, noʊ, ju mʌst hæv ɡɔn tu lu mælˈnɑtiz./",
                trans: "오, 이런, 루 말나티스에 가셨나 보네요.",
                chunks: [
                    { text: "Oh, no, You must have gone to Lou Malnati's.", s: 41.030, e: 43.060 }
                ]
            },
            {
                speaker: 'B',
                start: 43.060, end: 46.400,
                ipa: "/ænd ðə ˈpipəl ɑr soʊ fæt. waɪ ɑr ðeɪ ɔl soʊ fæt?/",
                trans: "그리고 사람들이 너무 뚱뚱해. 왜 다들 그렇게 뚱뚱한 거야?",
                chunks: [
                    { text: "And the people are so fat.", s: 43.060, e: 44.470 },
                    { text: "Why are they all so fat?", s: 44.470, e: 46.400 }
                ]
            },
            {
                speaker: 'S',
                start: 46.400, end: 48.550,
                ipa: "/wɛl, pərˈhæps frʌm ðə dɪsˈɡʌstɪŋ fud./",
                trans: "음, 아마 그 끔찍한 음식 때문이겠지.",
                chunks: [
                    { text: "Well, perhaps from the disgusting food.", s: 46.400, e: 48.550 }
                ]
            },
            {
                speaker: 'E',
                start: 48.550, end: 57.410,
                ipa: "/tru, wi ɑr ɪn ðə mɪdst əv ən oʊˈbisɪti ˌɛpɪˈdɛmɪk. ɪn fækt, mɜrk wʌz wʌn əv ɑr ˈbɪɡəst ˈklaɪənts. ðeɪ meɪk ə ˌdaɪəˈbitiz drʌɡ ðæt wi ˈmɑrkətəd ðə hɛk aʊt əv. seɪlz wɛnt ʌp 63 pərˈsɛnt./",
                trans: "맞아요, 우린 지금 비만이라는 전염병의 한가운데 있죠. 사실, 머크가 저희의 가장 큰 고객 중 하나였어요. 거긴 당뇨병 약을 만드는데, 저희가 엄청나게 마케팅을 했죠. 매출이 63%나 올랐어요.",
                chunks: [
                    { text: "True, We are in the midst of an obesity epidemic.", s: 48.550, e: 50.710 },
                    { text: "In fact, Merck was one of our biggest clients.", s: 50.740, e: 52.670 },
                    { text: "They make a diabetes drug", s: 52.670, e: 53.890 },
                    { text: "that we marketed the heck out of.", s: 53.890, e: 55.360 },
                    { text: "Sales went up 63 percent.", s: 55.360, e: 57.410 }

                ]
            },
            {
                speaker: 'B',
                start: 57.410, end: 62.390,
                ipa: "/soʊ ju kriˈeɪt ðə dɪˈziz, ðɛn ju trit ðə dɪˈziz, ænd ðɛn ju ˈmɑrkət ðə ˈtritmənt əv ðə dɪˈziz./",
                trans: "그러니까 당신들이 병을 만들고, 그 병을 치료하고, 그리고 그 치료제를 마케팅한다는 거군.",
                chunks: [
                    { text: "So you create the disease,", s: 57.410, e: 59.000 },
                    { text: "then you treat the disease,", s: 59.000, e: 60.240 },
                    { text: "and then you market", s: 60.240, e: 61.210 },
                    { text: "the treatment of the disease.", s: 61.210, e: 62.390 }
                ]
            },
            {
                speaker: 'S',
                start: 62.390, end: 64.780,
                ipa: "/wɛl- pərˈhæps stɑp ˈitɪŋ./",
                trans: "글쎄, 그냥 그만 먹으면 될 텐데.",
                chunks: [
                    { text: "Well- Perhaps stop eating.", s: 62.390, e: 64.780 }
                ]
            },
            {
                speaker: 'B',
                start: 64.780, end: 65.920,
                ipa: "/ðɛr ɪz noʊ ˈmʌni ɪn ðæt./",
                trans: "거기엔 돈이 안 되잖아.",
                chunks: [
                    { text: "There is no money in that.", s: 64.780, e: 65.920 }
                ]
            },
            {
                speaker: 'S',
                start: 65.920, end: 67.460,
                ipa: "/tru./",
                trans: "맞아요.",
                chunks: [
                    { text: "True.", s: 65.920, e: 67.460 }
                ]
            },
            {
                speaker: 'E',
                start: 67.460, end: 70.290,
                ipa: "ˌsɪɡəˈrɛts kɔz ˌdaɪəˈbitiz ænd ˈkænsər./",
                trans: "담배는 당뇨병과 암을 유발하죠.",
                chunks: [
                    { text: "Cigarettes cause diabetes and cancer.", s: 67.460, e: 70.290 }
                ]
            },
            {
                speaker: 'B',
                start: 70.290, end: 75.700,
                ipa: "/jɛs. wɛl, ˈsmoʊkɪŋ ɪz ə ˈplɛʒər. ænd wɪˈðaʊt ˈplɛʒər, hu ɑr wi?/",
                trans: "맞아. 음, 흡연은 기쁨이지. 기쁨이 없다면 우리는 과연 무엇일까?",
                chunks: [
                    { text: "Yes. Well, smoking is a pleasure.", s: 70.290, e: 73.210 },
                    { text: "And without pleasure, who are we?", s: 73.210, e: 75.700 }
                ]
            },
            {
                speaker: 'S',
                start: 75.700, end: 76.150,
                ipa: "/ˈdʒɜrmən?/",
                trans: "독일인?",
                chunks: [
                    { text: "German?", s: 75.700, e: 76.150 }
                ]
            },
            {
                speaker: 'B',
                start: 77.570, end: 78.410,
                ipa: "/ɪɡˈzæktli raɪt/",
                trans: "정답이야.",
                chunks: [
                    { text: "Exactly right.", s: 77.570, e: 78.410 }
                ]
            }
        ]
    },
    wk02: {
        title: "Emily in Paris | 시즌1 - EP1 ",
        audio: "WK02 Dubbing.wav",
        unlockDate: "2026-09-17T00:00:00+09:00", // 9월 17일 공개
        sentences: [
            {
                speaker: 'E',
                start: 0.000, end: 4.190,
                ipa: "/ɪts əˈmeɪzɪŋ, ˈɪzənt ɪt? ði ɪnˈtaɪər ˈsɪti lʊks laɪk ˌrætəˈtuːi./",
                trans: "정말 멋지지 않아? 도시 전체가 라따뚜이 같아.",
                chunks: [
                    { text: "It's amazing, isn't it?", s: 0.000, e: 1.970 },
                    { text: "The entire city looks like Ratatouille.", s: 1.970, e: 4.190 }
                ]
            },
            {
                speaker: 'BF',
                start: 4.190, end: 5.610,
                ipa: "/ɪts ˈbjuːtɪfəl./",
                trans: "아름다워.",
                chunks: [
                    { text: "It's beautiful.", s: 4.190, e: 5.610 }
                ]
            },
            {
                speaker: 'E',
                start: 5.610, end: 6.760,
                ipa: "/soʊ, ˈbjuːtɪfəl./",
                trans: "너무 아름다워.",
                chunks: [
                    { text: "So, beautiful.", s: 5.610, e: 6.760 }
                ]
            },
            {
                speaker: 'BF',
                start: 7.900, end: 8.850,
                ipa: "/heɪ, haʊ wʌz ðə fɜrst deɪ?/",
                trans: "첫날은 어땠어?",
                chunks: [
                    { text: "Hey, how was the first day?", s: 7.900, e: 8.850 }
                ]
            },
            {
                speaker: 'E',
                start: 9.280, end: 18.890,
                ipa: "/ɡreɪt. oʊˈkeɪ, ˈmeɪbi ə fjuː θɪŋz ɡɑt lɔst ɪn trænsˈleɪʃən./",
                trans: "좋았어. 뭐, 소통에 약간 문제가 있긴 했지만.",
                chunks: [
                    { text: "Great.", s: 9.280, e: 9.760 },
                    { text: "Okay,", s: 10.940, e: 11.460 },
                    { text: "maybe a few things got lost in translation.", s: 11.810, e: 13.650 }

                ]
            },
            {
                speaker: 'E',
                start: 14.080, end: 18.890,
                ipa: "/aɪ miːn, ɪt tʊk ðɛm ə ˈmɪnɪt tə ˈriːəˌlaɪz aɪ wʌz miː ænd nɑt ˈmædəlɪn, bʌt aɪ ˈrɪli fiːl laɪk aɪ kʊd biː ə bɪɡ ˈæsɛt hɪr./",
                trans: "내 말은, 내가 매들린이 아니라 나라는 걸 깨닫는 데 시간이 좀 걸리긴 했지만, 그래도 내가 여기서 큰 자산이 될 수 있을 것 같은 기분이 들어.",
                chunks: [
                    { text: "I mean, it took them a minute", s: 14.080, e: 14.930 },
                    { text: "to realize I was me and not Madeline,", s: 14.930, e: 16.400 },
                    { text: "but I really feel like", s: 16.400, e: 17.490 },
                    { text: "I could be a big asset here.", s: 17.490, e: 18.890 }
                ]
            },
            {
                speaker: 'BF',
                start: 18.890, end: 21.370,
                ipa: "/heɪ, lʊk wʌt aɪ ɡɑt, hʌ?/",
                trans: "야, 내가 뭐 가져왔게?",
                chunks: [
                    { text: "Hey, look what I got, huh?", s: 18.890, e: 21.370 }
                ]
            },
            {
                speaker: 'E',
                start: 21.370, end: 26.870,
                ipa: "/θæŋk ɡɑd! jʊr ˈɡɑnə lʌv ˈpærɪs. aɪ doʊnt ˈwɑnə spɛnd əˈnʌðər deɪ ɪn ðə moʊst roʊˈmæntɪk ˈsɪti ɪn ðə wɜrld wɪˈðaʊt juː./",
                trans: "다행이다! 넌 파리를 사랑하게 될 거야. 세상에서 가장 낭만적인 이 도시에서 너 없이 하루도 더 보내고 싶지 않아.",
                chunks: [
                    { text: "Thank God!", s: 21.370, e: 22.260 },
                    { text: "You're gonna love Paris.", s: 22.260, e: 23.650 },
                    { text: "I don't wanna spend", s: 23.650, e: 24.500 },
                    { text: "another day in the most romantic city", s: 24.500, e: 26.030 },
                    { text: "in the world without you.", s: 26.030, e: 26.870 }
                ]
            },
            {
                speaker: 'BF',
                start: 26.870, end: 28.000,
                ipa: "/jæ, aɪl biː ðɛr suːn, oʊˈkeɪ?/",
                trans: "그래, 곧 갈게, 알았지?",
                chunks: [
                    { text: "Yeah, I'll be there soon, okay?", s: 26.870, e: 28.000 }
                ]
            },
            {
                speaker: 'E',
                start: 29.150, end: 31.420,
                ipa: "/ˈhɜri, aɪ mɪs juː ɔlˈrɛdi hɪr./",
                trans: "서둘러, 벌써 네가 보고 싶어.",
                chunks: [
                    { text: "Hurry, I miss you already here.", s: 29.150, e: 31.420 }
                ]
            },
            {
                speaker: 'BF',
                start: 33.660, end: 33.890,
                ipa: "/baɪ./",
                trans: "안녕.",
                chunks: [
                    { text: "Bye.", s: 33.660, e: 33.890 }
                ]
            }
        ]
    },




    wk03: {
        title: "Emily in Paris | 시즌1 - EP2 ",
        audio: "WK03 Dubbing.wav",
        unlockDate: "2026-09-24T00:00:00+09:00",
        sentences: [
            {
                speaker: 'M',
                start: 0.420, end: 6.020,
                ipa: "/ɪts ən ɪˈlɑdʒɪkəl ˈkʌltʃər, bʌt ɪts ə ˈbjuːtəfəl wʌn, tuː. ˈbɛtər tə dʒʌst lɛt ɪt wɑʃ ˈoʊvər juː./",
                trans: "비논리적인 문화이긴 하지만, 아름다운 문화이기도 해. 그냥 그 문화에 몸을 맡기는 게 나아.",
                chunks: [
                    { text: "It's an illogical culture,", s: 0.420, e: 1.610 },
                    { text: "but it's a beautiful one, too", s: 1.610, e: 3.920 },
                    { text: "Better to just let it", s: 3.920, e: 4.880 },
                    { text: "wash over you.", s: 4.880, e: 6.020 }
                ]
            },
            {
                speaker: 'E',
                start: 6.020, end: 8.740,
                ipa: "/jæ, bʌt ðæts dʒʌst ɪt. aɪm ˈwɜːrid aɪ maɪt draʊn. /",
                trans: "응, 근데 바로 그거야. 난 익사할까 봐 걱정돼. ",
                chunks: [
                    { text: "Yeah, but that's just it.", s: 6.020, e: 7.500 },
                    { text: "I'm worried I might drown.", s: 7.500, e: 8.740 }

                ]
            },
            {
                speaker: 'E',
                start: 10.200, end: 13.400,
                ipa: "/ˈmeɪbi aɪm dʒʌst nɑt kʌt aʊt fɔːr ðɪs ˈsɪti, juː noʊ? aɪ θɔt ɪt wʌz ˈgɔnə biː ən ædˈvɛntʃər./",
                trans: "어쩌면 난 이 도시랑 안 맞는 걸지도 몰라, 알지? 난 이게 모험이 될 줄 알았어.",
                chunks: [
                    { text: "Maybe I'm just", s: 10.200, e: 11.060 },
                    { text: "not cut out for this city, you know?", s: 11.060, e: 12.510 },
                    { text: "I thought it was gonna be an adventure.", s: 12.510, e: 13.400 }
                ]
            },
            {
                speaker: 'M',
                start: 13.610, end: 16.670,
                ipa: "/ænd ɪt ɪz. ˈmeɪbi ən ˈivən ˈbɛtər wʌn ðæn juː ɪˈmædʒɪnd./",
                trans: "그리고 모험이 맞아. 아마 네가 상상했던 것보다 훨씬 더 멋진 모험일 거야.",
                chunks: [
                    { text: "And it is.", s: 13.610, e: 14.880 },
                    { text: "Maybe an even better one than you imagined.", s: 14.880, e: 16.670 }
                ]
            },
            {
                speaker: 'E',
                start: 18.660, end: 21.730,
                ipa: "/aɪ dʒʌst ˈnɛvər ˈpɪktʃərd maɪˈsɛlf hɪər əˈloʊn./",
                trans: "그냥 나 혼자 여기에 있는 건 상상도 못 해봤거든.",
                chunks: [
                    { text: "I just never pictured myself here alone.", s: 18.660, e: 21.730 }
                ]
            },
            {
                speaker: 'M',
                start: 21.730, end: 33.220,
                ipa: "/jʊər nɑt əˈloʊn. juː hæv ə frɛnd hɪər naʊ. ˈpærɪs ɪz ðə moʊst ɪkˈsaɪtɪŋ ˈsɪti ɪn ðə wɜrld. ænd juː ˈnɛvər noʊ wʌts ˈgɔnə ˈhæpən nɛkst./",
                trans: "넌 혼자가 아니야. 이제 여기 친구가 있잖아. 파리는 세상에서 가장 신나는 도시야. 그리고 다음에 무슨 일이 일어날지 아무도 모르지.",
                chunks: [
                    { text: "You're not alone.", s: 21.730, e: 22.690 },
                    { text: "You have a friend here now.", s: 23.930, e: 25.150 },
                    { text: "Paris is the most", s: 27.710, e: 28.660 },
                    { text: "exciting city in the world.", s: 28.660, e: 30.420 },
                    { text: "And you never know", s: 30.420, e: 31.220 },
                    { text: "what's gonna happen next.", s: 31.220, e: 33.220 }
                ]
            }
        ]
    },


    wk04: {
        title: "Emily in Paris | 시즌1 - EP2 ",
        audio: "WK04 Dubbing.wav",
        unlockDate: "2026-10-01T00:00:00+09:00",
        sentences: [
            {
                speaker: 'E',
                start: 0.000, end: 1.420,
                ipa: "/ðɛr ɔl ɪn ɪt təˈgɛðər?/",
                trans: "다들 한통속이라고?",
                chunks: [
                    { text: "They're all in it together?", s: 0.000, e: 1.420 }
                ]
            },
            {
                speaker: 'M',
                start: 2.810, end: 6.890,
                ipa: "/aɪ θɪŋk ɪts ˈprɑbəbli ˈtɑləˌreɪtɪd mɔr ðæn dɪˈskʌst./",
                trans: "대놓고 말하기보단 그냥 묵인하는 쪽에 가까울 거야.",
                chunks: [
                    { text: "I think it's probably", s: 2.810, e: 3.940 },
                    { text: "tolerated more than discussed.", s: 3.940, e: 6.890 }
                ]
            },
            {
                speaker: 'E',
                start: 6.890, end: 10.800,
                ipa: "/bʌt aɪ doʊnt gɛt ɪt. wʌts ðə pɔɪnt əv ˈbiɪŋ ˈmɛrid ɪf jʊər dʒʌst ˈgɔnə tʃiːt ɑn jʊər spaʊs?/",
                trans: "근데 이해가 안 돼. 어차피 바람피울 거면 결혼은 대체 왜 하는 거야?",
                chunks: [
                    { text: "But I don't get it.", s: 6.890, e: 8.090 },
                    { text: "What's the point of being married", s: 8.090, e: 9.490 },
                    { text: "if you're just gonna", s: 9.490, e: 9.970 },
                    { text: "cheat on your spouse?", s: 9.970, e: 10.800 }
                ]
            },
            {
                speaker: 'M',
                start: 10.800, end: 17.670,
                ipa: "/ʌ, ˈmeɪbi ˈæftər jʊər ˈmɛrid fɔːr 20 jɪrz, juː maɪt fiːl ˈdɪfrəntli. aɪ miːn, ðə frɛntʃ ɑr roʊˈmæntɪks, bʌt ðɛr ˈɔlsoʊ ˈriəlɪsts./",
                trans: "음, 결혼하고 20년쯤 지나면 생각이 달라질지도 몰라. 내 말은, 프랑스인들은 로맨티시스트이기도 하지만 동시에 현실주의자이기도 하다는 거지.",
                chunks: [
                    { text: "Uh, maybe after you're married for 20 years,", s: 10.800, e: 13.550 },
                    { text: "you might feel differently.", s: 13.550, e: 14.580 },
                    { text: "I mean, the French are romantics,", s: 14.580, e: 15.890 },
                    { text: "but they're also realists.", s: 15.890, e: 17.670 }
                ]
            },
            {
                speaker: 'M',
                start: 17.670, end: 20.530,
                ipa: "/ɑ, kjuːt əˈlɜrt! haʊ duː juː noʊ əˈbaʊt ðɪs pleɪs?/",
                trans: "여기 너무 귀엽다. 어떻게 찾은 곳이야?",
                chunks: [
                    { text: "Ah, Cute alert!", s: 17.670, e: 19.570 },
                    { text: "How do you know about this place?", s: 19.570, e: 20.530 }
                ]
            },
            {
                speaker: 'E',
                start: 20.530, end: 22.870,
                ipa: "/aɪ lɪv raɪt daʊn ðɛr, ænd ˈɛvri taɪm aɪ pæs baɪ, ɪts pækt./",
                trans: "저 아래에 살거든, 지나갈 때마다 항상 붐비더라고.",
                chunks: [
                    { text: "I live right down there,", s: 20.530, e: 21.400 },
                    { text: "and every time I pass by, it's packed.", s: 21.400, e: 22.870 }
                ]
            },


            {
                speaker: 'M',
                start: 22.870, end: 26.440,
                ipa: "/ɑ, bɔn ˌæpeɪˈti.",
                trans: "자, 맛있게 먹어볼까~.",
                chunks: [
                    { text: "Ah, bon appétit.", s: 22.870, e: 26.440 }
                ]
            },
            {
                speaker: 'E',
                start: 26.440, end: 27.220,
                ipa: "/sɑnˈteɪ/",
                trans: "건배!",
                chunks: [
                    { text: "Santé", s: 26.440, e: 27.220 }
                ]
            },



            {
                speaker: 'M',
                start: 27.220, end: 28.320,
                ipa: "/sɑnˈteɪ/",
                trans: "건배!",
                chunks: [
                    { text: "Santé", s: 27.220, e: 28.320 }
                ]
            },

            {
                speaker: 'E',
                start: 28.320, end: 30.430,
                ipa: "/soʊ, wʌt brɔt juː tə ˈpærɪs?/",
                trans: "그래서, 파리엔 어쩌다 오게 된 거야?",
                chunks: [
                    { text: "So, what brought you to Paris?", s: 28.320, e: 30.430 }
                ]
            },
            {
                speaker: 'M',
                start: 30.430, end: 35.840,
                ipa: "/m... æt fɜrst, ˈbɪznɪs skuːl. maɪ ˈfɑðər ɪnˈsɪstɪd, ænd hiz just tuː ˈgɛtɪŋ hɪz weɪ./",
                trans: "음 처음엔 비즈니스 스쿨 때문이었어. 아빠가 우기셨거든, 그리고 아빠는 항상 자기 뜻대로 하는 데 익숙하신 분이니까.",
                chunks: [
                    { text: "Mm At first, business school", s: 30.430, e: 33.020 },
                    { text: "My father insisted,", s: 33.020, e: 34.240 },
                    { text: "and he's used to getting his way.", s: 34.240, e: 35.840 }
                ]
            }
        ]
    }
};
