module.exports = function override(config, env) {
  config.resolve.fallback = {
    path: false,
    crypto: false,
    os: false,
    fs: false,
    child_process: false,
  }
  return config
}
