module.exports = {
    apps : [
        {
            name      : 'client-server',
            script    : 'bin/www',
            max_memory_restart: '2G',
            error_file: 'logs/err.log',
            out_file: 'logs/out.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            instances: 1,
            // exec_mode: 'cluster',
            kill_timeout: 3000,
            wait_ready: true,
            listen_timeout: 4000,
            restart_delay: 4000,
            env: {
                PORT: 3000,
                NODE_ENV: 'development',
                STORAGE_ENV: 'XSKY',
                DEBUG: 'PC:*'
            },
            env_production : {
                PORT: 3000,
                NODE_ENV: 'production',
                STORAGE_ENV: 'QINIU',
                DEBUG: 'PC:*'
            },
            env_private: {
                PORT: 3000,
                NETWORK: 'private', // 网络
                NODE_ENV: 'development',
                STORAGE_ENV: 'XSKY',
            },
        },
    ]
};
