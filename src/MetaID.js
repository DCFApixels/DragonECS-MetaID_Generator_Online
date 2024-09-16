class MetaID
{
    static size = 16;

    static Generate() {
        const array = new Uint8Array(MetaID.size);
        crypto.getRandomValues(array);
        return this.#GenerateDataMarker_Internal(array);
    }
    static GenerateWithDataOnly()
    {
        const array = new Uint8Array(MetaID.size);
        return this.#GenerateDataMarker_Internal(array);
    }

    static #GenerateDataMarker_Internal(array)
    {
        const timestamp = Date.now();
        const timestampBytes = new Uint8Array(new BigUint64Array([BigInt(timestamp)]).buffer);

        for (let i = 0; i < timestampBytes.length - 2; i++) 
        {
            array[i] = timestampBytes[i];
        }

        return Array.from(array)
            .map(value => value.toString(16).padStart(2, '0'))
            .join('')
            .toUpperCase();
    }
}