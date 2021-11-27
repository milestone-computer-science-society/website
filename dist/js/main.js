$(async () => {
  const raw = await fetch('data/main.json')
  const data = await raw.json()
  $.each(data, async (row_index, category) => {
    $('#container').append($('<h1>').text(category.title))
    const rowContainer = $('<div>').addClass('row').appendTo('#container')
    const raw = await fetch(`data/${category.file}`)
    const data = await raw.json()

    $.each(data, async (column_index, item) => {
      const css = {}
      if (item.image) {
        css.backgroundImage = `url(${item.image})`
        css.backgroundRepeat = 'no-repeat'
        css.backgroundSize = 'contain'
        css.backgroundPosition = 'center'
      }
      $("<div>")
        .append($("<h2>").text(item.title))
        .attr("data-hover", item.hover)
        .append($("<span>").addClass("background").css(css))
        .append($("<em>").addClass("badge").text(item.badge))
        .addClass("rectangle")
        .addClass(item.classes)
        .click(() => {
          open(item.url)
        })
        .appendTo(rowContainer)
    })
  })
  /*
    for (let item of data) {
      const css = {}
      if (item.image) {
        css.backgroundImage = `url(${item.image})`
        css.backgroundRepeat = 'no-repeat'
        css.backgroundSize = 'contain'
        css.backgroundPosition = 'center'
      }
      $("#rectangles")
        .append(
          $("<div>")
          .append($("<h2>").text(item.title))
          .attr("data-hover", item.hover)
          .append($("<span>").addClass("background").css(css))
          .append($("<em>").addClass("badge").text(item.badge))
          .addClass("rectangle")
          .addClass(item.classes)
          .addClass(`w-${item.width}`)
          .addClass(`h-${item.height}`)
          .click(() => {
            open(item.url)
          })
        )
    }*/
})
