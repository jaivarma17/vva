(function () {
  var track = document.getElementById("client-logo-track");
  if (!track) return;

  var logos = [
    ["01.png", "Presto Testing Instruments"],
    ["02.png", "My Eye Hospital"],
    ["03.png", "Nirula's"],
    ["04.png", "Eternesse Anti Aging Clinic"],
    ["05.png", "Ascot Hospitality"],
    ["06.png", "Harvest Gold"],
    ["07.png", "Tata Management Training Centre"],
    ["08.png", "Silverglades"],
    ["09.png", "Sahara India Pariwar"],
    ["10.png", "IL&FS"],
    ["11.png", "Mahindra"],
    ["12.png", "Louis Vuitton"],
    ["13.png", "Dantal Hydraulics"],
    ["14.png", "Ahluwalia Contracts (India) Limited"],
    ["15.png", "ILBS"],
    ["16.png", "Reethi Beach Resort"],
    ["17.png", "DLF"],
    ["18.png", "Tutela"],
    ["19.png", "Aamby Valley City"],
    ["20.png", "Godfrey Phillips India Limited"],
    ["21.png", "NDTV"],
    ["22.png", "ArcelorMittal"],
    ["23.png", "Swatch"],
    ["24.png", "Barista Coffee"],
    ["25.png", "Asian Development Bank"],
    ["26.png", "SYAAT"],
    ["27.png", "BSEL API"],
    ["28.png", "Central Park"],
    ["29.png", "Oliander Farms"],
    ["30.png", "Kodak"],
    ["31.png", "AFCS"],
    ["32.png", "Presto Testing Instruments"],
    ["33.png", "NAMTECH"]
  ];

  function createGroup(isDuplicate) {
    var group = document.createElement("div");
    group.className = "client-logo-group";
    group.setAttribute("role", "list");
    if (isDuplicate) {
      group.setAttribute("aria-hidden", "true");
    } else {
      group.setAttribute("aria-label", "Clients and collaborators");
    }

    logos.forEach(function (logo) {
      var item = document.createElement("div");
      item.className = "client-logo-item";
      item.setAttribute("role", "listitem");

      var image = document.createElement("img");
      image.src = "assets/img/logos-monochrome/" + logo[0];
      image.alt = isDuplicate ? "" : logo[1];
      image.loading = "lazy";
      image.decoding = "async";
      item.appendChild(image);
      group.appendChild(item);
    });

    return group;
  }

  track.appendChild(createGroup(false));
  track.appendChild(createGroup(true));
})();
