const lisMobile = line2.map((station, i) => {
    if (i < 4) {
        return `<li data-coords="${2 * i + 5}, 2" data-labelpos="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 21) {
        return `<li data-coords="12, ${i - 1}" data-dir="E" data-labelpos="W">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 25) {
        return `<li data-coords="${
            -(i * 2) + 53
        }, 20" data-dir="S" data-labelpos="S">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 42) {
        return `<li data-coords="4, ${44 - i}" data-dir="W" data-labelpos="E">
        <a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
        </li>`;
    } else if (i < 43) {
        return `<li data-coords="5,2">
    
        </li>`;
    }
});

const coda1 = line2.map((station, i) => {
    if (i === 41) {
        return `<li data-coords="12, 9"></li>`;
    }
    if (i > 42 && i < 46) {
        return `<li data-coords="13, ${
            11 + 40 - i
        }" data-dir="E" data-labelpos="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const coda2 = line2.map((station, i) => {
    if (i === 46) {
        return `<li data-coords="4, 11"></li>`;
    }
    if (i > 46) {
        return `<li data-coords="3, ${
            11 - 46 + i
        }" data-dir="W" data-labelpos="W">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const lisPc = line2.map((station, i) => {
    if (i < 10) {
        return `<li data-coords="${23 + i * 3}, 10"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 14) {
        return `<li data-coords=" 51, ${11 + (i - 10) * 2.5}" data-dir="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 19) {
        return `<li data-coords=" 51, ${11 + (i - 10) * 2.5}" data-dir="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 31) {
        return `<li data-coords="${50 - (i - 19) * 3}, 32"  data-dir="S">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 40) {
        return `<li data-coords="16, ${16.2 - (i - 37) * 2.4}"  data-dir="W">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    } else if (i < 43) {
        return `<li data-coords="${15 + (i - 39) * 2}, 10"  data-dir="N">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const coda3 = line2.map((station, i) => {
    if (i === 41) {
        return `<li data-coords="51, 12"></li>`;
    }
    if (i > 42 && i < 46) {
        return `<li data-coords="${
            (60 - i) * 3
        },7" data-dir="E" data-labelpos="E">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const coda4 = line2.map((station, i) => {
    if (i === 46) {
        return `<li data-coords="16, 26"></li>`;
    }
    if (i > 46) {
        return `<li data-coords="13, ${
            26 + (47 - i) * 3
        }" data-dir="W" data-labelpos="W">
<a href="trainInfo.html?statn_nm=${line2[i].statn_nm}">${
            line2[i] ? line2[i].statn_nm : ""
        }</a>
</li>`;
    }
});

const getHtmlText = () => {
    if ($(window).width() < 768) {
        const htmlText = `
     <div id="map-wrapper">
    
    <div class="subway-map" data-columns="15" data-rows="24" data-cellSize="50" data-legendId="legend"
data-textClass="text" data-gridNumbers="true" data-grid="false" data-lineWidth="8">

<ul data-color="#82eca7" data-label="jQuery Widgets">
${lisMobile.join("")}
</ul>

<ul data-color="#82eca7">

${coda1.join("")}


</ul>

<ul data-color="#82eca7">

${coda2.join("")}


</ul>


</div>
</div>
`;

        return htmlText;
    } else {
        const htmlText = `
         <div id="map-wrapper">
<div class="subway-map" data-columns="62" data-rows="40" data-cellSize="24" data-legendId="legend"
data-textClass="text" data-gridNumbers="true" data-grid="true" data-lineWidth="8">

<ul data-color="#82eca7" data-label="jQuery Widgets" data-shiftCoords="-3,0">
    ${lisPc.join("")}
</ul>

<ul data-color="#82eca7" data-shiftCoords="-3,0">
    ${coda3.join("")}
</ul>
<ul data-color="#82eca7" data-shiftCoords="-3,0">
    ${coda4.join("")}
</ul>

<ul data-color="#82eca7" data-shiftCoords="-3,0">
    <li data-coords="21,10"></li>
    <li data-coords="23,10"></li>
</ul>

</div>

</div>`;
        return htmlText;
    }
};

function update() {
    if ($("#wrap").is(".main")) {
        $("#wrap").html("");
        $("#wrap").html(getHtmlText());

        $(".subway-map").subwayMap({
            debug: true,
        });

        if ($(window).width() < 1249) {
            $(".subway-map").css(
                "zoom",
                $(window).width() / $("canvas").width()
            );
        }
    }
}

update();

window.onresize = () => {
    update();
};

let RSid = 0;
let recentSearch = [];

if (localStorage.recentSearch) {
    recentSearch = JSON.parse(localStorage.recentSearch);
    if (recentSearch) {
        RSid = recentSearch[recentSearch.length - 1]["id"];
    }
}

$("#wrap").on("click", ".subway-map .text", function (e) {
    e.preventDefault();

    const statn_nm = $(this).text().slice(1, -1).trim();

    RSid++;

    const obj = { id: RSid, text: statn_nm };
    console.log(recentSearch);
    recentSearch.push(obj);
    if (recentSearch.length > 5) {
        recentSearch.shift();
    }

    console.log(recentSearch);

    localStorage.recentSearch = JSON.stringify(recentSearch);

    console.log(statn_nm);

    const state = { statn_nm: statn_nm };

    history.pushState(state, null);

    $("#wrap").html("");
    $("#wrap").removeClass();
    $("#wrap").addClass("trainInfo");

    $("#wrap").load(`trainInfo.html`);
});
