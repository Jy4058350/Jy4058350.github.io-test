<!DOCTYPE html>
<html class="js" lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Practice *****</title>
  <link rel="stylesheet" href="../styles/loader.scss" />
  <link rel="stylesheet" href="../styles/style.scss" />
  <link rel="stylesheet" href="../styles/flickity.min.css" />
</head>

<body class="features--heading-normal features--heading-uppercase">
  <div id="loader" class="Loader">
    <div class="Loader-inner">
      <div class="Loader-rect">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span id="Loader-percent" class="Loader-percent">0%</span>
    </div>
  </div>
  <div class="PageOverlay"></div>

  <div id="section-sidebar-menu"></div>
  <div id="sidebar-cart" data-section-id="cart"></div>
  <div id="global-container">
    <div id="pageContainer">
      <header id="section-header" class="Header">
        <div class="Header__Wrapper">
          <div class="Header__FlexItem Header__FlexItem--fill">
            <button class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable" aria-label="メニューを開く"></button>
            <nav class="Header__MainNav"></nav>
            <form action=""></form>
          </div>
          <div class="Header__FlexItem Header__FlexItem--logo">
            <a href="../index.html" class="Header__LogoLink"> </a>
          </div>
          <div class="Header__FlexItem Header__FlexItem--fill"></div>
        </div>
      </header>
      <main id="main">


      </main>

    </div>
  </div>
  <footer id="section-footer"></footer>
  <canvas id="canvas"></canvas>
  <script type="module" src="../scripts/index.js"></script>
</body>

</html>