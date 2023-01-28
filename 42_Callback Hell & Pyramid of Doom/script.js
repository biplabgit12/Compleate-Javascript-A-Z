// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded script with src " + src);
    callback(null, src);
  }
  script.onerror = function () {
    console.log("Error loading script with src " + src);
    callback(new Error("src some got error"));

  }
  document.body.append(script);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
    if (error) {
      console.log(error);
      return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
      if (error) {
        console.log(error);
        return;
      }
      loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
        if (error) {
          console.log(error);
          return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
          if (error) {
            console.log(error);
            return;
          }
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
            if (error) {
              console.log(error);
              return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
              if (error) {
                console.log(error);
                return;
              }
              loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
                if (error) {
                  console.log(error);
                  return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
                  if (error) {
                    console.log(error);
                    return;
                  }
                  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) {
                    if (error) {
                      console.log(error);
                      return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", function greeting(error, src) { })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});

