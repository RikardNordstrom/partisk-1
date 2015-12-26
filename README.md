# Partisk - The Political Party Opinion Visualizer

**Start the app**

```bash
echo "create database partisk" | mysql -u username -p
mysql -u username -p partisk < partisk.sql
sudo npm install -g webpack node-sass
npm install
npm run dev
```

As of now you have to edit utils/APIUtils.js with user/pass to mysql.

Open [localhost:3000](http://localhost:3000).

You can also try the built app:

```bash
npm run build   # First, build for production
npm run prod    # then, run the production version
```

then open [localhost:8080](http://localhost:8080).

**Read more**
[Fluxible](http://fluxible.io/) - Used to be able to render both in browser and server side
[React](https://facebook.github.io/react/) - Rendering
[Webpack](https://webpack.github.io/) - Building
[Node](https://nodejs.org/en/) - Backend
[Sass](http://sass-lang.com/) - CSS extension
