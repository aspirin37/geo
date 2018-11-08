<template>
    <main class="page-container"
          @drop.prevent>
        <div @click="clickFileBtn">
            <drop class="dropzone"
                  :class="{ over }"
                  @dragover="over = !isPreviewDragged"
                  @dragleave="over = false"
                  @drop="handleDrop">
                <span class="dropzone-text">Выберите фотографии или перетащите их в выделенную область</span>
                <input type="file"
                       class="d-none"
                       ref="file-btn"
                       multiple
                       accept="image/*"
                       @change="handleFiles">
            </drop>
        </div>
        <draggable class="dropzone-gallery"
                   :options="draggableOptions"
                   v-model="files">
            <div class="dropzone-preview-wrapper"
                 @dragstart="dragPreview"
                 @dragend="dropPreview"
                 v-for="(it, i) in files"
                 :key="i">
                <img :src="it.src">
                <i class="close-btn dropzone-close-btn"
                   @click="removeImage(it.order)"></i>
            </div>
        </draggable>
    </main>
</template>
<script>
import Draggable from 'vuedraggable'
import { Drop } from 'vue-drag-drop';

export default {
    components: {
        Draggable,
        Drop
    },
    data() {
        return {
            isPreviewDragged: false,
            over: false,
            files: [],
            filesLength: 0,
            draggableOptions: {
                animation: 150,
            }
        }
    },
    methods: {
        addFile(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                let obj = {
                    file,
                    src: reader.result,
                    name: file.name,
                    fixed: false,
                    order: this.filesLength
                }
                this.files.push(obj)
                this.filesLength++
            }

        },
        handleDrop(data, evt) {
            event.preventDefault()
            const files = event.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                if (files.item(i).type.includes('image')) this.addFile(files.item(i))
            }
            this.over = false;
        },
        handleFiles(evt) {
            const files = this.$refs['file-btn'].files;

            for (let i = 0; i < files.length; i++) {
                this.addFile(files.item(i))
            }
        },
        clickFileBtn() {
            this.$refs['file-btn'].click()
        },
        removeImage(order) {
            this.files = this.files.filter(it => it.order !== order)
        },
        dragPreview(evt) {
            this.isPreviewDragged = true

            // var dragIcon = document.createElement('img');
            // dragIcon.src = evt.srcElement.children[0].currentSrc;
            // var c = document.createElement("canvas");
            // c.width = 120;
            // c.height = 120;
            // var ctx = c.getContext('2d');
            // ctx.drawImage(dragIcon, 0, 0, c.width, c.height);
            // dragIcon.src = c.toDataURL();
            // this.previewDragged = evt.srcElement
            // console.log(this.previewDragged, 'in')
            // this.previewDragged.classList.add('scale')

            // var clientRect = evt.target.getBoundingClientRect();
            // var offsetX = (evt.clientX - clientRect.left);
            // var offsetY = (evt.clientY - clientRect.top)

            // evt.dataTransfer.setDragImage(dragIcon, offsetX, offsetY);

            // var img = new Image();
            // img.src = evt.srcElement.children[0].currentSrc;
            // evt.dataTransfer.setDragImage(img, offsetX, offsetY);

        },
        dropPreview() {
            // console.log(this.previewDragged, 'out')
            // this.previewDragged.classList.remove('scale')
            this.isPreviewDragged = false
        },
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.btn {
    width: 180px;
}
</style>
<style lang="scss">
@import '@/styles/_variables.scss';

.dropzone {
    display: flex;
    height: 200px;
    margin-bottom: 20px;
    transition: 0.3s;
    cursor: pointer;
}

.dropzone:hover {
    background-color: #f6f6f6;
}

.over .dropzone-text {
    opacity: 0.5;
}

.dropzone-text {
    color: #777;
    margin: 2em auto;
    text-align: center;
}

.dropzone-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.dropzone-preview-wrapper {
    position: relative;
    border-radius: 20px;
    padding: 10px;
}

.dropzone-gallery img {
    // margin: 10px;
    // transition: 0.3s;
    border-radius: 20px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    z-index: 10;
}

.visibility-hidden {
    visibility: hidden;
}

.dropzone-close-btn {
    transition: 0.2s;
    z-index: 20;
    right: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background-size: 10px 10px;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 50%;
    opacity: 1;
    cursor: pointer;
}
</style>