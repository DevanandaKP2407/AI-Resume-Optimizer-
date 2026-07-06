export async function retry(fn, retries = 3, delay = 1500) {

    let lastError;

    for (let i = 0; i < retries; i++) {

        try {

            return await fn();

        } catch (error) {

            lastError = error;

            if (i < retries - 1) {

                await new Promise(resolve =>
                    setTimeout(resolve, delay)
                );

            }

        }

    }

    throw lastError;

}