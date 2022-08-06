const sounds = ["E808_Loop_BD_105_01",
"E808_Loop_BD_105-02",
"E808_Loop_BD_105-03",
"E808_Loop_BD_105-04",
"E808_Loop_BD_105-05",
"E808_Loop_BD_105-06",
"E808_Loop_BD_105-07",
"E808_Loop_BD_105-08",
"E808_Loop_Hats_105-01",
"E808_Loop_Hats_105-02",
"E808_Loop_Hats_105-03",
"E808_Loop_Hats_105-04",
"E808_Loop_Hats_105-05",
"E808_Loop_Hats_105-06",
"E808_Loop_Hats_105-07",
"E808_Loop_Hats_105-08",
"E808_Loop_SD_105-01",
"E808_Loop_SD_105-02",
"E808_Loop_SD_105-03",
"E808_Loop_SD_105-04",
"E808_Loop_SD_105-05",
"E808_Loop_SD_105-06",
"E808_Loop_SD_105-07",
"E808_Loop_SD_105-08",
"E808_Loop_Perc_105-01",
"E808_Loop_Perc_105-02",
"E808_Loop_Perc_105-03",
"E808_Loop_Perc_105-04",
"E808_Loop_Toms_105-01",
"E808_Loop_Toms_105-02",
"E808_Loop_Toms_105-03",
"E808_Loop_Toms_105-04"]

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})