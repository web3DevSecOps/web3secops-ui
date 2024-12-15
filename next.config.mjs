const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false, // Keeps the viewBox for accessibility and scaling purposes
                },
              ],
            },
          },
        },
      ],
    });

    // Add cache settings to improve performance when dealing with large assets like SVGs
    config.cache = {
      type: 'filesystem',
      
    };

    return config;
  },
};

export default nextConfig;
