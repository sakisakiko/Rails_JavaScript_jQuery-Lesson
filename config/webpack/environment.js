const { environment } = require('@rails/webpacker')

// yarnで追加したjQuery（yarn add jqueryコマンド）を、実際に使用できるようにする記述
const webpack = require('webpack')
environment.plugins.prepend(
 'Privide',
 new webpack.ProvidePlugin({
   $:'jquery/src/jquery',
   jQuery: 'jquery/src/jquery',
   Swiper: 'swiper/swiper-bundle'
 })
)

module.exports = environment
