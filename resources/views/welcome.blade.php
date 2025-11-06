<!DOCTYPE html>
<html>
  <head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])


  </head>
  <body style="margin: 0; padding: 0; box-sizing: border-box; background-color: #c81f1fff;">
    <div id="app"></div>
  </body>
</html>
