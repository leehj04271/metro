(function ($) {
    $("form").on("input", (e) => {
        let value = e.target.value;
        let arr = [];
        line2.forEach((station, i) => {
            const index = station.statn_nm.indexOf(value);
            if (index !== -1) {
                console.log(index, station.statn_nm);
                arr.push(station.statn_nm);
            }
        });

        $("#star ul").remove();
        let list = `<ul class="itext">`;
        let htmlText = arr.map((name) => {
            list += `<li>`;
            list += `<input type="text" value="${name}" disabled>`;
            list += `<button type="button" class='addS' data-statn="${name}">추가</button></li>`;
        });
        list += `</ul>`;
        $(".itext").html(htmlText);
        $("#star .btn").before(list);

        $(this).blur("#star ul", function () {
            $(".itext").remove();
        });

        $(this).keypress(function (e) {
            if (e.blur) {
                if ($(this).val() == "") {
                    $("#star ul .itext").remove();
                }
            }
        });
    });

    var id = 0;
    var gdata = [];

    if (localStorage.gdata) {
        gdata = JSON.parse(localStorage.gdata);
        if (gdata) {
            id = gdata[gdata.length - 1]["id"];
        }
        usedata(gdata);
    }

    // 추가
    $("#star").on("click", ".addS", function () {
        let aname = $(this).attr("data-statn");
        let obj = { id: id, text: aname };
        gdata.push(obj);
        localStorage.gdata = JSON.stringify(gdata);
        usedata(gdata);
        console.log("gdata", gdata);
    });

    function usedata(rdata) {
        $("#star ul").remove();
        let list = `<ul class="starlist">`;
        rdata.map(function (value) {
            list += `<li>`;
            list += `<div><a href="?statn_nm=${value.text}">${value.text}</a>`;
            list += `</div>`;
            list += `<button type="button">삭제</button></li>`;
        });
        list += `</ul>`;
        $("#star .btn").before(list);
    }

    // 삭제
    $("body").on("click", ".starlist li button", function () {
        let num = $(this).parent().index();
        gdata.splice(num, 1);
        localStorage.gdata = JSON.stringify(gdata);
        $("#star ul").remove();
        usedata(gdata);
    });

    $(".btn a").on("click", function () {
        localStorage.clear();
        gdata = [];
        usedata(gdata);
        return false;
    });

    $("#wrap").on("click", ".starlist a", function (e) {
        const text = $(this).text();

        var state = { statn_nm: text };
        history.pushState(state, null);

        $("#wrap").removeClass();
        $("#wrap").addClass("trainInfo");

        $("#wrap").load(`trainInfo.html`);

        return false;
    });
})(jQuery);
