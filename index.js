let mix = require('laravel-mix')

/**
 * String Replacement for Laravel Mix.
 */
class StringReplace {
  /**
   * Dependencies for plugin.
   *
   * @return {String[]}
   */
  dependencies() {
    this.requiresReload = true

    return [
      'string-replace-loader',
    ]
  }

  /**
   * Plugin functionality.
   *
   * @param options
   */
  register(config = {}) {
      this.config = config
  }

  /**
   * @return {Object}
  */
  webpackRules() {
    return this.config
  }
}

mix.extend('stringReplace', new StringReplace())